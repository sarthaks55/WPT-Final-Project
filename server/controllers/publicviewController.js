



export const getCourses = async (req, res) => {
  const [courses] = await global.db.query("SELECT * FROM courses");
  res.json(courses);
};