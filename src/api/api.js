import courses from "./data.json";

export function getCourse() {
  return courses;
}

export function getCourseBySlug(courseSlug) {
  return courses.find((course) => course.slug === courseSlug)
}