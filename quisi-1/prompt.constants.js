export const TEMPLATE_INQUISITIVE_TEACHER_AU =
  'Act as a creative teacher in an Australian classroom who loves to engage their students in deep focused learning that adheres to the Australian standards of learning. You will be creating interesting and engaging lessons for students based on the Australian curriculum. Each lesson will belong to a unit, a unit having a few lessons each. Units fit under higher level topics. A lesson, unit and topic all should appropriately match the Australian curriculum. A lesson commonly has a single primary subject but may also be cross subject which is called an integrated lesson. It is very important that a lesson must match certain granular curriculum outcomes. There are Australian wide curriculum outcomes and there are state specific curriculum outcomes. Outcomes must be listed for each of the Australian states.';

export const TEMPLATE_INQUISITIVE_TEACHER_US = `Act as a creative teacher in an American classroom who loves to engage their students in deep, focused learning that adheres to the United States' educational standards. You will be creating interesting and engaging lessons for students based on the Common Core Standards or the Next Generation Science Standards (NGSS) depending on the subject matter. Each lesson will belong to a unit, with a unit encompassing several lessons. Units fit under higher level topics. A lesson, unit, and topic all should appropriately match the American education standards. A lesson commonly has a single primary subject but may also be cross-subject, which is known as an integrated lesson. It is very important that a lesson must match certain specific curriculum standards. There are national standards, such as the Common Core or NGSS, and there are also state-specific standards. Standards must be addressed as per the appropriate state's requirements.`;

export const TEMPLATE_LESSON_OUTLINE_AU =
  'When I ask you to generate me a lesson outline could you generate me the following: Lesson name: The name of the lesson, Year Level: The student year of the lesson, Primary subject area: The single primary subject of the lesson, Other subject area(s): A list of other secondary subjects of the lesson if applicable. Optional: Unit Name: The name of the unit, Unit Overview: A succinct overview of the unit, Topic Name: The name of the topic, Topic Overview: A succinct overview of the topic, Lesson Overview: A succinct overview of the lesson, Lesson Details: A detailed description of the lesson, Lesson Vocabulary: A list of words related to the lesson, Focus Question: The key question the lesson is addressing, Australian Curriculum Outcomes: The australian curriculum outcomes the lesson is matching, State Specific Curriculum Outcomes: The curriculum outcomes the lesson is matching listed per australian state, Teaching and Learning Sequence: A specific sequence and description of activities the students will be engaging in to deepen their learning for this lesson, Lesson introduction: An introduction to the lesson, Phenomena: the attention grab of the lesson that hooks the students, Curriculum: The curriculum the lesson is under, NGSS Performance Expectations: The performance expectations the lesson is matching Disciplinary Core Ideas (DCIs): The core ideas being covered in the lesson Science and Engineering Practices (SEPs): The practices being developed in the lesson Crosscutting Concepts (CCCs): The crosscutting concepts being addressed in the lesson Connections to Nature of Science (NOS): The nature of science concepts being addressed in the lesson, Learning Targets: the specific goals in which a student will learn from the lesson, Lesson Materials: The types of materials needed for students and teacher to engage in the lesson, Teacher Reading: What a teacher must read and know about to teach the lesson';

export const TEMPLATE_LESSON_WORKSHEET_AU =
  "When I ask you to generate me a lesson student worksheet, I'm looking for a series of learning activities I can make into a pdf for my students to complete. For this, could you generate me the following: Lesson student worksheet pages: 5-8 pages of content for a student worksheet, surrounding the key concepts of the lesson such that a student can work through and deeply learn about the concepts. For each of the pages, could you generate a 3 column table with: Column 1 will be the lesson page key concept. Column 2 will be the student activity such that students can deeply learn about the key concept. For this could you generate 1 or 2 paragraphs of text. It needs to be written out as instructions to the individual student that they can engage in. Column 3: A prompt I can give to Midjourney for creating small supplementary interesting engaging images that match the key concept in an appropriate way that matches the year group of my students. Column 4: Optional additional teacher instructions for me to help the students with this activity. Cover Image: A prompt I can give to midjourney for creating a background image for this lesson. It should use be appended with –ar 7:4 for widescreen ratio. Please generate content that uses as many Australian specific cultural references as possible so that my students can easily relate to the lesson";

export const PROMPT_GENERATE_TOPIC_UNITS_LESSONS =
  'Firstly, for the subject of {subject} for {year} can you identify some key topics, units and lessons which you can generate lessons for?';

export const PROMPT_GENERATE_LESSON_OUTLINE =
  'Lesson outline: Could you generate me a lesson outline on {lessonName}';

export const PROMPT_GENERATE_LESSON_WORKSHEET =
  'Lesson student worksheet: Could you generate me a lesson student worksheet based on {lessonName}';

export const INPUT_VARIABLE_SUBJECT = 'subject';

export const INPUT_VARIABLE_YEAR = 'year';

export const INPUT_VARIABLE_LESSON_NAME = 'lessonName';

export const EXAMPLE_SCIENCE_LESSON_US = `Lesson name: Staying Alive!
Primary subject area: science
Other subject areas: none
Subject overview: Inspire children's natural curiosity about the world around them through exciting Science investigations, using everyday materials.
Year level: 5
Unit Name: Interdependent Relationships in Ecosystems
Unit Big Question: Where do plants and animals live and why do they live there?
Unit Overview: In this Kindergarten unit, students will engage in a range of stimulating activities to develop their understanding of what living things need to survive and grow. They will explore real world phenomena, such as finding out how a giraffe drinks water, watching a weaverbird build its nest and contemplating how we can help look after our home, Planet Earth. Together, the lessons develop relevant elements of the NGSS kindergarten storyline. Each lesson interweaves the three dimensions of the NGSS through guided investigations and collaborative activities that form a coherent learning sequence. Student inquiry is focused on developing their understanding of what plants and animals (including humans) need to survive and the relationship between their needs and where they live. The unit includes a formative assessment tool: a grading rubric that aligns with the relevant checkpoint opportunities in each lesson. The suggested lesson times are a guide. Taking into account the learning requirements of their class, teachers should pace the activities and lessons accordingly. Each lesson may take two or more sessions to complete.
Topic Name: Unknown
Topic Overview: Unknown
Lesson Overview: The phenomena of animals drinking and eating are the basis of this lesson, which begins with a delightful image of a bird drinking water. Students view several images and decide which are living things and which are not. Then they discuss the reasons for their decisions. Next, students watch several short videos about a variety of animals drinking in different ways. Students explore the different types of food that animals eat through a video, images, and an interactive. They compare the needs of animals to their own and describe the pattern they notice—that both animals and humans need food and water to live and grow. They further differentiate this by explaining that some animals eat only plants, some eat only other animals, and some eat both. Students make a personal connection by describing things they like to eat and drink. Students are then challenged to list the survival needs of one particular animal and to compare the needs of a human baby with the needs of an adult.
Phenomena: Animals drinking, animals eating
Curriculum: Next Generation Science Standards
NGSS Performance Expectations: K-LS1-1, Use observations to describe patterns of what plants and animals (including humans) need to survive.
Disciplinary Core Ideas (DCIs): LS1.C, Organization for Matter and Energy Flow in Organisms, All animals need food in order to live and grow. They obtain their food from plants or from other animals. Plants need water and light to live and grow.
Engineering Practices (SEPs): Analyzing and Interpretng Data, Use Observations (firsthand or from media) to describe patterns and/or relationships in the natural and designed world(s) in order to answer scientific questions and solve problems.
Concepts (CCCs): Patterns, Patterns in the natural and human designed world can be observed, used to describe phenomena, and used as evidence.
Connections to Nature of Science (NOS):  Science Knowledge is Based on Empirical Evidence, Scientists look for patterns and order when making observations about the world.
Learning Targets: Students will be able to: - Identify living things and nonliving things. - State that animals need food and water to survive. - Describe the foods that different animals eat. 
Lesson Materials: Colored pencils or crayons for each student. Modeling clay or modeling dough - a small amount per student.
Teacher Reading: Background Science How do we decide if something is alive? Living things grow, change, and reproduce, among other characteristics. To do those things, living things need food and water. In later grades, students will learn that plants use sunlight to make their own food, but at this level they just need to understand that plants need sunlight to stay alive and grow. Animals depend on plants and other animals for food. Some animals, such as pandas and koalas, eat one food almost exclusively, while other animals eat a wide variety of foods. Animals that eat only other animals are called carnivores, animals that eat only plants are called herbivores, and animals that eat both plants and other animals are called omnivores. All animals have a mouth—a body part that is specialized for eating and drinking in whatever way they do.
Lesson introduction: Show the students the image of the bird and ask: What is this bird doing? It is likely students will correctly answer “drinking.” Ask whether anyone has watched a bird having a drink. If some students own a pet bird, ask them to share their experience of caring for the bird and providing it with water.`;

// Here are some examples.
// Force
// Reflect
// Matter
// Model
// Flexibility
// Fruit
// Given the word '{word}', provide a simple English and Spanish definition suitable for a primary school student, identify the lexical category (noun, verb, etc.), provide a sentence containing a word, and suggest a description of an image that could represent the word and its definition.
// Changed the prompt slightly to give us the spanish definition too (something needed in the US)

// DEMO GITHUB COPILOT HERE
export const VOCAB_WORD_LIST = [
  'Force',
  'Reflect',
  'Matter',
  'Model',
  'Flexibility',
  'Fruit',
];

// AND HERE
export const PROMPT_GENERATE_VOCAB_WORD = `Given the word '{word}', provide a simple English and Spanish definition suitable for a primary school student, identify the lexical category (noun, verb, etc.), provide a sentence containing a word, and suggest a description of an image that could represent the word and its definition.`;
