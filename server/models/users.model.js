import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcryptjs";
import query from "../config/db.conf";
import { getByUser } from "./location.model";


export async function register(username, password) {
  try {

    const [user] = await query("SELECT * FROM user WHERE user.username = ?", [username])

    if (user) {
      return { error: "Username already in use", success: false }
    }
    const hash = await bcrypt.hash(password, 10)
    const uuid = uuidv4()

    await query("INSERT INTO user (username, password, uuid) VALUES (?,?,?)", [username, hash, uuid])
    return { data: "Successfully signed up!", success: true }

  } catch (err) {
    console.error(err)
    return { error: "Something went wrong.", success: false }
  }
}

export async function login(username, password) {
  try {
    const [user] = await query("SELECT * FROM user WHERE user.username = ?", [username])

    if (!user) {
      return { error: "Invalid Username or password", success: false }
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      return { error: "Invalid username or Password", success: false }
    }

    const { data, error } = await getByUser(user.id);
    if (error) {
      return { error, success: false };
    }
    return {
      data: { user: { username: user.username } },
      success: true,
      id: user.id,
    };
  } catch (err) {
    console.error(err);
    return { error: "Something went wrong", success: false };
  }
}