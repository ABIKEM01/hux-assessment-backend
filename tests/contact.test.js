const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../app.js');
const Contact = require('../models/Contact.js');
const User = require('../models/User.js');


let token;

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const user = new User({ email: "testuser@yahoo.com", password: "testpassword" });
  await user.save();
  const res = await request(app).post("/api/auth/login").send({
    email: "testuser@yahoo.com",
    password: "testpassword",
  });
  token = res.body.token;
});

afterAll(async () => {
  await User.deleteMany({});
  await Contact.deleteMany({});
  await mongoose.connection.close();
});

describe("Contact API", () => {
  it("should create a contact", async () => {
    const res = await request(app)
      .post("/api/contacts")
      .set("Authorization", `Bearer ${token}`)
      .send({
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "1234567890",
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("_id");
  });

  it("should update a contact", async () => {
    // Generate a valid ObjectId for the userId
    const userId = mongoose.Types.ObjectId();

    const contact = new Contact({
      userId: userId,
      firstName: "Jane",
      lastName: "Doe",
      phoneNumber: "1234567890",
    });

    await contact.save();

    const updateData = {
      firstName: "Janet",
      lastName: "Smith",
      phoneNumber: "0987654321",
    };

    const response = await request(app)
      .put(`/api/contacts/${contact._id}`)
      .send(updateData)
      .expect(200);

    expect(response.body.firstName).toBe("Janet");
    expect(response.body.lastName).toBe("Smith");
    expect(response.body.phoneNumber).toBe("0987654321");
  });
});
