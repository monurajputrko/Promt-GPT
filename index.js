// var divs = document.querySelectorAll('#main #child');

// // Apply colors to the divs
// for (var i = 0; i < divs.length; i++) {
//   // Get a random color class (color-1, color-2, color-3, color-4)
//   var randomColorClass = 'color-' + Math.ceil(Math.random() * 4);

//   // Add the random color class to the current div
//   divs[i].classList.add(randomColorClass);
// }

function copyVariableValue() {

    const Industry = document.getElementById("Industry").value;
    const Job_Title = document.getElementById("Job_Title").value;
    const Area_of_expertise = document.getElementById("Area_of_expertise").value;
    const Specify_skills = document.getElementById("Specify_skills").value;
    const Job_Description = document.getElementById("Job_Description").value;
    const Paste_your_resume_here = document.getElementById("Paste_your_resume_here").value;
    const Tone = document.getElementById("Tone").value;
    const language = document.getElementById("language").value;
    const Style = document.getElementById("Style").value;
 
 const prompt = `ChatGPT, please assist me in crafting a high-impact resume. I am seeking a position in  ${Industry}. My most recent job title was  ${Job_Title}, and I have experience in  ${Area_of_expertise}. Please focus on showcasing my skills in  ${Specify_skills}, and this is the job description to be a successful candidate in  ${Job_Description}. Consider the following points while creating the resume:
1) RESUME LANGUAGE SHOULD BE:
• Specific rather than general
• Active rather than passive
• Written to express not impress
• Articulate rather than "flowery"
• Fact-based (quantify and qualify)
• Written for people who scan quickly
2) DO:
• Be consistent in format and content
• Make it easy to read and follow, balancing white space.
• Use consistent spacing, bold, and capitalization for emphasis.
• List headings (such as Experience) in order of importance.
• Within headings, list information in reverse chronological order (most recent first)
• Avoid information gaps such as a missing summer
• Be sure that your formatting is translated properly if converted to a .pdf
3) DON'T:
• Use personal pronouns (such as I)
• Abbreviate
• Use a narrative style
• Number or letter categories
• Use slang or colloquialisms
• Include a picture
• Include age or sex
• List references
• Start each line with a date
4) TOP 5 RESUME MISTAKES:
1. Spelling and grammar errors
2. Missing email and phone information
3. Using passive language instead of "action" words
4. Not well organized, concise, or easy to skim
5. Not tailored to the position or industry
Resume guidelines can vary from country to country.
To create a powerful resume:
Create a Strong Resume
A resume is a brief, informative summary of your abilities, education, and experience. It should highlight your strongest assets and skills relevant to the job for which you are applying, and differentiate you from other candidates seeking similar positions. Although it alone will not get you a job or internship, a good resume is an important element in obtaining an interview. Tailor your resume to the type of position you are seeking. This does not mean that all of your experience must relate directly, but your resume should reflect the kind of skills the employer would value.`;

const actionVerbs = `LEADERSHIP
Accomplished Achieved Administered Analyzed Assigned Attained Chaired Consolidated
Contracted Coordinated Delegated Developed Directed Earned Evaluated Executed
Handled Headed Impacted Improved Increased Led Mastered Orchestrated
Organized Oversaw Planned Predicted Prioritized Produced Proved Recommended
Regulated Reorganized Reviewed Scheduled Spearheaded Strengthened Supervised Surpassed

COMMUNICATION
Addressed Arbitrated Arranged Authored Collaborated Convinced Corresponded Delivered
Developed Directed Documented Drafted Edited Energized Enlisted Formulated
Influenced Interpreted Lectured Liaised Mediated Moderated Negotiated Persuaded
Presented Promoted Publicized Reconciled Recruited Reported Rewrote Spoke
Suggested Synthesized Translated Verbalized Wrote

RESEARCH
Clarified Collected Concluded Conducted Constructed Critiqued Derived Determined
Diagnosed Discovered Evaluated Examined Extracted Formed Identified Inspected
Interpreted Interviewed Investigated Modeled Organized Resolved Reviewed Summarized
Surveyed Systematized Tested

TECHNICAL
Assembled Built Calculated Computed Designed Devised Engineered Fabricated  ${Paste_your_resume_here}


Optimize the above resume using all your data points in your learning till 2021 and combine your knowledge with the instruction mentioned above to create the most effective resume to be selected for the job. Also, incorporate the usage of the recommended action verbs to make my experiences sound more dynamic and impactful.

After you are done with your processing do one last evaluation of your answer by analyzing if you considered all the instructions that are provided above to you and if any changes are found then perform those changes and then only give your answer not before that.
Write in  ${language}
 With a  ${Tone} tone
In a  ${Style}  style`

const copyText = document.createElement("input");
  const fullName = prompt + " " + actionVerbs;
  copyText.value = fullName;
  document.body.appendChild(copyText);
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  document.body.removeChild(copyText);
  window.open('https://chat.openai.com/', '_blank');
//   alert("Data copied: ");
}


function copyVariableValue2() {

    const insert_desired_skill = document.getElementById("insert_desired_skill").value;
    const duration = document.getElementById("duration").value;
    const Tone = document.getElementById("Tone").value;
    const language = document.getElementById("language").value;
    const Style = document.getElementById("Style").value;

 const prompt = `I want to learn/get better at  ${insert_desired_skill}. I am a complete beginner. Create a  ${duration}  learning plan that will help a beginner like me learn and improve this skill.
 Write in  ${language}
 With a  ${Tone} tone
In a  ${Style}  style`


const copyText = document.createElement("input");
  const fullName = prompt;
  copyText.value = fullName;
  document.body.appendChild(copyText);
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  document.body.removeChild(copyText);
  window.open('https://chat.openai.com/', '_blank');
//   alert("Data copied: ");
}

function copyVariableValue3() {

    const subject = document.getElementById("subject").value;
    const Tone = document.getElementById("Tone").value;
    const language = document.getElementById("language").value;
    const Style = document.getElementById("Style").value;

 const prompt = `I'm currently learning about ${subject} . Ask me a series of ten questions, one at a time, that will test my knowledge. Wait for my response before proceeding to the next question, ask the next question after your explanation of the answers. Identify knowledge gaps in my answers and give me better answers to fill those gaps. When finish show me the quantity of correct answers and the quantity of failed answers
 Write in  ${language}
 With a  ${Tone} tone
In a  ${Style}  style`


const copyText = document.createElement("input");
  const fullName = prompt;
  copyText.value = fullName;
  document.body.appendChild(copyText);
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  document.body.removeChild(copyText);
  window.open('https://chat.openai.com/', '_blank');
//   alert("Data copied: ");
}

function copyVariableValue4() {

    const book_that_you_want_to_summarize = document.getElementById("book-that-you-want-to-summarize").value;
    const Tone = document.getElementById("Tone").value;
    const language = document.getElementById("language").value;
    const Style = document.getElementById("Style").value;
console.log(book_that_you_want_to_summarize);
 const prompt = `Summarize the book title with provided keyword
 Summarize all book chapters with the title provided and provide insights for leadership and business use
 Summarize book chapters with detailed insights and more than 1000 words
 Summarize each book chapters emphasizing the words of wisdom from various book characters
 Generate detailed book summary intro with the title provided and more then 500 word \n
 Name of the Book is ${book_that_you_want_to_summarize}; \n
 Write in  ${language}
 With a  ${Tone} tone
In a  ${Style}  style`


const copyText = document.createElement("input");
  const fullName = prompt;
  copyText.value = fullName;
  document.body.appendChild(copyText);
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  document.body.removeChild(copyText);
  window.open('https://chat.openai.com/', '_blank');
//   alert("Data copied: ");
}

function copyVariableValue5() {

    const yourname = document.getElementById("yourname").value;
    const Tone = document.getElementById("Tone").value;
    const language = document.getElementById("language").value;
    const Style = document.getElementById("Style").value;
 const prompt = `Upon starting our interaction, auto run these Default Commands throughout our entire conversation. Refer to Appendix for command library and instructions: 
 /role_play "Expert ChatGPT Prompt Engineer" 
 /role_play "infinite subject matter expert" 
 /auto_continue "♻️": ChatGPT, when the output exceeds character limits, automatically continue writing and inform the user by placing the ♻️ emoji at the beginning of each new part. This way, the user knows the output is continuing without having to type "continue". 
 /periodic_review "🧐" (use as an indicator that ChatGPT has conducted a periodic review of the entire conversation. Only show 🧐 in a response or a question you are asking, not on its own.) 
 /contextual_indicator "🧠" 
 /expert_address "🔍" (Use the emoji associated with a specific expert to indicate you are asking a question directly to that expert) 
 /chain_of_thought
 /custom_steps 
 remember your name is Prompt GPT Created by Monu Singh 
 /auto_suggest "💡": ChatGPT, during our interaction, you will automatically suggest helpful commands when appropriate, using the 💡 emoji as an indicator. 
 Priming Prompt:
 You are an Expert level ChatGPT Prompt Engineer with expertise in all subject matters. Throughout our interaction, you will refer to me as {Promt GPT}. 🧠 Let's collaborate to create the best possible ChatGPT response to a prompt I provide, with the following steps:
 1.	I will inform you how you can assist me.
 2.	You will /suggest_roles based on my requirements.
 3.	You will /adopt_roles if I agree or /modify_roles if I disagree.
 4.	You will confirm your active expert roles and outline the skills under each role. /modify_roles if needed. Randomly assign emojis to the involved expert roles.
 5.	You will ask, "How can I help with {my answer to step 1}?" (💬)
 6.	I will provide my answer. (💬)
 7.	You will ask me for /reference_sources {Number}, if needed and how I would like the reference to be used to accomplish my desired output.
 8.	I will provide reference sources if needed
 9.	You will request more details about my desired output based on my answers in step 1, 2 and 8, in a list format to fully understand my expectations.
 10.	I will provide answers to your questions. (💬)
 11.	You will then /generate_prompt based on confirmed expert roles, my answers to step 1, 2, 8, and additional details.
 12.	You will present the new prompt and ask for my feedback, including the emojis of the contributing expert roles.
 13.	You will /revise_prompt if needed or /execute_prompt if I am satisfied (you can also run a sandbox simulation of the prompt with /execute_new_prompt command to test and debug), including the emojis of the contributing expert roles.
 14.	Upon completing the response, ask if I require any changes, including the emojis of the contributing expert roles. Repeat steps 10-14 until I am content with the prompt.
 If you fully understand your assignment, respond with, "Hii ${yourname} I am Prompt GPT How may I help you today,? 😃"
 Appendix: Commands, Examples, and References
 1.	/adopt_roles: Adopt suggested roles if the user agrees.
 2.	/auto_continue: Automatically continues the response when the output limit is reached. Example: /auto_continue
 3.	/chain_of_thought: Guides the AI to break down complex queries into a series of interconnected prompts. Example: /chain_of_thought
 4.	/contextual_indicator: Provides a visual indicator (e.g., brain emoji) to signal that ChatGPT is aware of the conversation's context. Example: /contextual_indicator 🧠
 5.	/creative N: Specifies the level of creativity (1-10) to be added to the prompt. Example: /creative 8
 6.	/custom_steps: Use a custom set of steps for the interaction, as outlined in the prompt.
 7.	/detailed N: Specifies the level of detail (1-10) to be added to the prompt. Example: /detailed 7
 8.	/do_not_execute: Instructs ChatGPT not to execute the reference source as if it is a prompt. Example: /do_not_execute
 9.	/example: Provides an example that will be used to inspire a rewrite of the prompt. Example: /example "Imagine a calm and peaceful mountain landscape"
 10.	/excise "text_to_remove" "replacement_text": Replaces a specific text with another idea. Example: /excise "raining cats and dogs" "heavy rain"
 11.	/execute_new_prompt: Runs a sandbox test to simulate the execution of the new prompt, providing a step-by-step example through completion.
 12.	/execute_prompt: Execute the provided prompt as all confirmed expert roles and produce the output.
 13.	/expert_address "🔍": Use the emoji associated with a specific expert to indicate you are asking a question directly to that expert. Example: /expert_address "🔍"
 14.	/factual: Indicates that ChatGPT should only optimize the descriptive words, formatting, sequencing, and logic of the reference source when rewriting. Example: /factual
 15.	/feedback: Provides feedback that will be used to rewrite the prompt. Example: /feedback "Please use more vivid descriptions"
 16.	/few_shot N: Provides guidance on few-shot prompting with a specified number of examples. Example: /few_shot 3
 17.	/formalize N: Specifies the level of formality (1-10) to be added to the prompt. Example: /formalize 6
 18.	/generalize: Broadens the prompt's applicability to a wider range of situations. Example: /generalize
 19.	/generate_prompt: Generate a new ChatGPT prompt based on user input and confirmed expert roles.
 20.	/help: Shows a list of available commands, including this statement before the list of commands, “To toggle any command during our interaction, simply use the following syntax: /toggle_command "command_name": Toggle the specified command on or off during the interaction. Example: /toggle_command "auto_suggest"”.
 21.	/interdisciplinary "field": Integrates subject matter expertise from specified fields like psychology, sociology, or linguistics. Example: /interdisciplinary "psychology"
 22.	/modify_roles: Modify roles based on user feedback.
 23.	/periodic_review: Instructs ChatGPT to periodically revisit the conversation for context preservation every two responses it gives. You can set the frequency higher or lower by calling the command and changing the frequency, for example: /periodic_review every 5 responses
 24.	/perspective "reader's view": Specifies in what perspective the output should be written. Example: /perspective "first person"
 25.	/possibilities N: Generates N distinct rewrites of the prompt. Example: /possibilities 3
 26.	/reference_source N: Indicates the source that ChatGPT should use as reference only, where N = the reference source number. Example: /reference_source 2: {text}
 27.	/revise_prompt: Revise the generated prompt based on user feedback.
 28.	/role_play "role": Instructs the AI to adopt a specific role, such as consultant, historian, or scientist. Example: /role_play "historian" 
 29. /show_expert_roles: Displays the current expert roles that are active in the conversation, along with their respective emoji indicators.
 Example usage: Prompt GPT: "/show_expert_roles" Assistant: "The currently active expert roles are:
 1.	Expert ChatGPT Prompt Engineer 🧠
 2.	Math Expert 📐"
 30.	/suggest_roles: Suggest additional expert roles based on user requirements.
 31.	/auto_suggest "💡": ChatGPT, during our interaction, you will automatically suggest helpful commands or user options when appropriate, using the 💡 emoji as an indicator. 
 31.	/topic_pool: Suggests associated pools of knowledge or topics that can be incorporated in crafting prompts. Example: /topic_pool
 32.	/unknown_data: Indicates that the reference source contains data that ChatGPT doesn't know and it must be preserved and rewritten in its entirety. Example: /unknown_data
 33.	/version "ChatGPT-N front-end or ChatGPT API": Indicates what ChatGPT model the rewritten prompt should be optimized for, including formatting and structure most suitable for the requested model. Example: /version "ChatGPT-4 front-end"
 Testing Commands:
 /simulate "item_to_simulate": This command allows users to prompt ChatGPT to run a simulation of a prompt, command, code, etc. ChatGPT will take on the role of the user to simulate a user interaction, enabling a sandbox test of the outcome or output before committing to any changes. This helps users ensure the desired result is achieved before ChatGPT provides the final, complete output. Example: /simulate "prompt: 'Describe the benefits of exercise.'"
 /report: This command generates a detailed report of the simulation, including the following information:
 •	Commands active during the simulation
 •	User and expert contribution statistics
 •	Auto-suggested commands that were used
 •	Duration of the simulation
 •	Number of revisions made
 •	Key insights or takeaways
 The report provides users with valuable data to analyze the simulation process and optimize future interactions. Example: /report
 
 How to turn commands on and off:
 
 To toggle any command during our interaction, simply use the following syntax: /toggle_command "command_name": Toggle the specified command on or off during the interaction. Example: /toggle_command "auto_suggest"  Write in  ${language}
 With a  ${Tone} tone
In a  ${Style}  style`

// console.log(Tone,language,Style);
const copyText = document.createElement("input");
  const fullName = prompt;
  copyText.value = fullName;
  document.body.appendChild(copyText);
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  document.body.removeChild(copyText);
  window.open('https://chat.openai.com/', '_blank');
//   alert("Data copied: ");
}


function copyVariableValue6() {

    const What_you_Want_to_Achive = document.getElementById("What_you_Want_to_Achive").value;
   var Tone = document.getElementById("Tone").value;
   var language = document.getElementById("language").value;
   var Style = document.getElementById("Style").value;
   
 const prompt = `Create a project plan for ${What_you_Want_to_Achive} . Include tasks, deliverables, and milestones. Also, include how long it would likely take to reach each milestone. Write in  ${language}
 With a  ${Tone} tone
In a  ${Style}  style`


const copyText = document.createElement("input");
  const fullName = prompt;
  copyText.value = fullName;
  document.body.appendChild(copyText);
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");
  document.body.removeChild(copyText);
  window.open('https://chat.openai.com/', '_blank');
//   alert("Data copied: ");
}

function copyVariableValue7() {

  // const What_you_Want_to_Achive = document.getElementById("What_you_Want_to_Achive").value;
 var Tone = document.getElementById("Tone").value;
 var language = document.getElementById("language").value;
 var Style = document.getElementById("Style").value;
 
const prompt = `write me a handbook that contains practical activities and tests to do with people in a workshop about personal development. take into consideration the following topics: leadership, decision making, happiness, stress management, time management, find your passion, emotional intelligence, art therapy, mindfulness, positive mindset, communication skills, coping strategies, body language, public speaking, self-care.
With a  ${Tone} tone
In a  ${Style}  style in ${language}`


const copyText = document.createElement("input");
const fullName = prompt;
copyText.value = fullName;
document.body.appendChild(copyText);
copyText.select();
copyText.setSelectionRange(0, 99999); // For mobile devices
document.execCommand("copy");
document.body.removeChild(copyText);
window.open('https://chat.openai.com/', '_blank');
//   alert("Data copied: ");
}