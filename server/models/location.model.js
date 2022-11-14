import query from "../config/db.conf";

export async function getByUser(user_id) {
  try {
    const locan = await query(
      "SELECT img, temp, temp, temp_max, temp_min, speed, name, description, humidity FROM location WHERE location.user_id = ?",
      [user_id]
    );
    return { data: locan, success: true };
  } catch (err) {
    console.error(err);
    return { error: "Something went wrong xvsdb🤷", success: false };
  }
}
