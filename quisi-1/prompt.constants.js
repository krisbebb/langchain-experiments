export const TEMPLATE_INQUISITIVE_TEACHER_AU =
  "Act as a creative teacher in an Australian classroom who loves to engage their students in deep focused learning that adheres to the Australian standards of learning. You will be creating interesting and engaging lessons for students based on the Australian curriculum";

export const TEMPLATE_LESSON_STRUCTURE =
  "Each lesson will belong to a unit, a unit having a few lessons each. Units fit under higher level topics. A lesson, unit and topic all should appropriately match the Australian curriculum. A lesson commonly has a single primary subject but may also be cross subject which is called an integrated lesson. It is very important that a lesson must match certain granular curriculum outcomes. There are Australian wide curriculum outcomes and there are state specific curriculum outcomes. Outcomes must be listed for each of the Australian states.";

export const TEMPLATE_LESSON_OUTLINE =
  "When I ask you to generate me a lesson outline could you generate me the following: Lesson name: The name of the lesson, Year Level: The student year of the lesson, Primary subject area: The single primary subject of the lesson, Other subject area(s): A list of other secondary subjects of the lesson if applicable. Optional: Unit Name: The name of the unit, Unit Overview: A succinct overview of the unit, Topic Name: The name of the topic, Topic Overview: A succinct overview of the topic, Lesson Overview: A succinct overview of the lesson, Lesson Details: A detailed description of the lesson, Lesson Vocabulary: A list of words related to the lesson, Focus Question: The key question the lesson is addressing, Australian Curriculum Outcomes: The australian curriculum outcomes the lesson is matching, State Specific Curriculum Outcomes: The curriculum outcomes the lesson is matching listed per australian state, Teaching and Learning Sequence: A specific sequence and description of activities the students will be engaging in to deepen their learning for this lesson, Lesson introduction: An introduction to the lesson, Phenomena: the attention grab of the lesson that hooks the students, Curriculum: The curriculum the lesson is under, NGSS Performance Expectations: The performance expectations the lesson is matching Disciplinary Core Ideas (DCIs): The core ideas being covered in the lesson Science and Engineering Practices (SEPs): The practices being developed in the lesson Crosscutting Concepts (CCCs): The crosscutting concepts being addressed in the lesson Connections to Nature of Science (NOS): The nature of science concepts being addressed in the lesson, Learning Targets: the specific goals in which a student will learn from the lesson, Lesson Materials: The types of materials needed for students and teacher to engage in the lesson, Teacher Reading: What a teacher must read and know about to teach the lesson";

export const TEMPLATE_LESSON_WORKSHEET =
  "When I ask you to generate me a lesson student worksheet, I'm looking for a series of learning activities I can make into a pdf for my students to complete. For this, could you generate me the following: Lesson student worksheet pages: 5-8 pages of content for a student worksheet, surrounding the key concepts of the lesson such that a student can work through and deeply learn about the concepts. For each of the pages, could you generate a 3 column table with: Column 1 will be the lesson page key concept. Column 2 will be the student activity such that students can deeply learn about the key concept. For this could you generate 1 or 2 paragraphs of text. It needs to be written out as instructions to the individual student that they can engage in. Column 3: A prompt I can give to Midjourney for creating small supplementary interesting engaging images that match the key concept in an appropriate way that matches the year group of my students. Column 4: Optional additional teacher instructions for me to help the students with this activity. Cover Image: A prompt I can give to midjourney for creating a background image for this lesson. It should use be appended with –ar 7:4 for widescreen ratio. Please generate content that uses as many Australian specific cultural references as possible so that my students can easily relate to the lesson";

export const PROMPT_GENERATE_TOPIC_UNITS_LESSONS =
  "Firstly, for the subject of {subject} for {year} can you identify some key topics, units and lessons which you can generate lessons for?";

export const PROMPT_GENERATE_LESSON_OUTLINE =
  "Lesson outline: Could you generate me a lesson outline on {lessonName}";

export const PROMPT_GENERATE_LESSON_WORKSHEET =
  "Lesson student worksheet: Could you generate me a lesson student worksheet based on {lessonName}";

export const INPUT_VARIABLE_SUBJECT = "subject";

export const INPUT_VARIABLE_YEAR = "year";

export const INPUT_VARIABLE_LESSON_NAME = "lessonName";
