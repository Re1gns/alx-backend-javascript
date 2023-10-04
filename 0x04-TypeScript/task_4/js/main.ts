// Constants for subjects
const Cpp = "Cpp Subjects";
const Java = "Java Subjects";
const React = "React Subjects";

// Teacher object
const cTeacher = {
  experienceTeachingC: 10,
};

// Function to get subject requirements
function getRequirements(subject) {
  switch (subject) {
    case Cpp:
      return "Cpp requirements: ...";
    case Java:
      return "Java requirements: ...";
    case React:
      return "React requirements: ...";
    default:
      return "Invalid subject.";
  }
}

// Function to get available teacher
function getAvailableTeacher(subject, teacher) {
  if (teacher.experienceTeachingC >= 10) {
    return `Available teacher for ${subject}: ${teacher.experienceTeachingC} years of experience.`;
  } else {
    return `Unavailable teacher for ${subject}.`;
  }
}

// Logging and calling functions for Cpp
console.log("C++");
console.log(getRequirements(Cpp));
console.log(getAvailableTeacher(Cpp, cTeacher));

// Logging and calling functions for Java
console.log("Java");
console.log(getRequirements(Java));
console.log(getAvailableTeacher(Java, cTeacher));

// Logging and calling functions for React
console.log("React");
console.log(getRequirements(React));
console.log(getAvailableTeacher(React, cTeacher));
