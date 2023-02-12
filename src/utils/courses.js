export function getCourse(courseId) {
    return window.contract.getCourse({ courseId });
}

export function addCourse(courseId, courseName) {
    return window.contract.addCourse({ courseId, courseName });
}