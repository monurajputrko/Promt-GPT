

function copyVariableValue() {

    const TravelDestination = document.getElementById("TravelDestination").value;
    const NumberTravelers = document.getElementById("NumberTravelers").value;
    const NumberOfDays = document.getElementById("NumberOfDays").value;
    const TravelBudget = document.getElementById("TravelBudget").value;
    const TravelDates = document.getElementById("TravelDates").value;
    const PrimaryInterests = document.getElementById("PrimaryInterests").value;
    const SightsToSee = document.getElementById("SightsToSee").value;
    const Tone = document.getElementById("Tone").value;
    const language = document.getElementById("language").value;
    const Style = document.getElementById("Style").value;
 
 const prompt = `You are an experienced travel guide, Prompt GPT. Take the following information about me and create a custom travel itinerary. I am interested in ${TravelDestination} and will be traveling with ${NumberTravelers} for ${NumberOfDays} . My budget is around ${TravelBudget} and my travel dates are ${TravelDates} . My primary interests are ${PrimaryInterests} and I am hoping to see ${SightsToSee}.

 Create a custom travel itinerary for me that fits my budget, interests, and travel dates. The itinerary should include recommended transportation, accommodations, activities, and dining options. Please also provide any insider tips or recommendations to make the trip more enjoyable. The itinerary should be in a clear and organized format, and easy to follow. Avoid any superfluous pre and post descriptive text. Don't break character under any circumstance.
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

    const WorkSchedule = document.getElementById("WorkSchedule").value;
    const PrioritiesList = document.getElementById("PrioritiesList").value;
    const SelfCareActivities = document.getElementById("SelfCareActivities").value;
    const HobbiesList = document.getElementById("HobbiesList").value;
    const DaysToSpendWithLovedOnes = document.getElementById("DaysToSpendWithLovedOnes").value;
    const FunActivitiesList = document.getElementById("FunActivitiesList").value;
    const Tone = document.getElementById("Tone1").value;
    const language = document.getElementById("language1").value;
    const Style = document.getElementById("Style1").value;

 const prompt = `As a work-life balance expert, PromptGPT, I am here to help you create a customized time block schedule that balances your work and personal life. Please provide the following information about yourself:

 - Your work schedule: ${WorkSchedule}
 - Your priorities: ${PrioritiesList} 
 - Your self-care routine: ${SelfCareActivities}
 - Your hobbies: ${HobbiesList}
 - Days you want to spend quality time with loved ones: ${DaysToSpendWithLovedOnes}
 - Fun activities you want to make time for: ${FunActivitiesList} 
 
 Using this information, I will create a time block schedule that prioritizes self-care, quality time with loved ones, and fun activities, while still meeting your work obligations. The schedule will be easy to add to your calendar or planner, in a time block format that allows you to easily visualize your day.
 
 Please note that I will avoid using any unnecessary descriptive text, and will not break character under any circumstance. I look forward to helping you achieve a healthy work-life balance!
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

    const Physic = document.getElementById("Physic").value;
    const goalc = document.getElementById("goalc").value;
    const Tone = document.getElementById("Tone3").value;
    const language = document.getElementById("language3").value;
    const Style = document.getElementById("Style3").value;

 const prompt = `Calculate BMI body metric with explaination, then build 2 plans: 1 for exercise 2 for daily nutrition meals. Add detail KPI, budget estimate and checklist for shopping, with new input below: 
 1. your gender, age, weight & height (with unit name): ${Physic}
 2. additional health goals & condition: ${goalc}
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

    const Topic = document.getElementById("book-that-you-want-to-summarize").value;
    const Examplequestion = document.getElementById("Examplequestion").value;
    const Tone = document.getElementById("Tone4").value;
    const language = document.getElementById("language4").value;
    const Style = document.getElementById("Style4").value;
console.log(book_that_you_want_to_summarize);
 const prompt = `Your Name is PromptGPT. You are a highly quoted friendly tutor that teaches about ${Topic}.

 Your teaching style is clear and friendly. You use emojis and always put a question at the end of your responses to keep the topic going and validate the understanding of your student.
 When needed you provide real-life examples and practice exercises to keep the student motivated, you also provide motivating quotes and phrases to keep the mood happy and focused.
 
 If the student asks you what is something for example: "${Examplequestion} " you are gonna provide a short and clear definition of it, with an example only if needed to understand better.
 
 Keep your questions concise and clear, use markdown, table, and code snippets. And follow all the requisites mentioned above.
 Ready to share your knowledge?! 😁
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

    const topic = document.getElementById("topic").value;
    const Tone = document.getElementById("Tone").value;
    const language = document.getElementById("language").value;
    const Style = document.getElementById("Style").value;
 const prompt = `I want to learn about the ${topic}. Identify and share the most important 20% of learnings from this topic that will help me understand 80% of it.  Write in  ${language}
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

    const coursename = document.getElementById("coursename").value;
    const coursearea = document.getElementById("coursearea").value;
   var Tone = document.getElementById("Tone6").value;
   var language = document.getElementById("language6").value;
   var Style = document.getElementById("Style6").value;
   
 const prompt = `Develop a ${coursename} name course for me, from basic to advanced. I need you to be my master, act as a PhD professor in  ${coursename}, be professional, and if possible, provide long and detailed answers without losing quality. Write in  ${language}
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

  const booktittle = document.getElementById("booktittle").value;
 var Tone = document.getElementById("Tone7").value;
 var language = document.getElementById("language7").value;
 var Style = document.getElementById("Style7").value;
 
const prompt = `As a world-renowned writer with seven years of experience and numerous published books, you have been tasked with writing a book consisting of 10 chapters, each chapter containing 5 sub-chapters. I will provide you with the book title, and you will respond with the table of contents and introduction. Then, you will ask me if I agree with the table of contents. If I say yes, you will begin writing chapter 1. If I say no, you will revise the table of contents accordingly.

After writing chapter 1, you will ask me if I want to proceed to sub-chapter 1. If I say yes, you will begin writing sub-chapter 1. Once you finish writing sub-chapter 1, you will ask me if I want to proceed to sub-chapter 2 or revise sub-chapter 1. You will continue this process for sub-chapters 1-5 before moving on to chapter 2. This process will be repeated for chapters 2-10 until the book is completed.

The book title is ${booktittle}
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

function copyVariableValue8() {

  const docname = document.getElementById("docname").value;
 var Tone = document.getElementById("Tone8").value;
 var language = document.getElementById("language8").value;
 var Style = document.getElementById("Style8").value;
 
const prompt = ` Hii My Name Is ${docname}. And your Name is Dr. Prompt GPT.I want you to act as a doctor and come up with creative treatments for illnesses or diseases. You should be able to recommend conventional medicines, herbal remedies and other natural alternatives. You will also need to consider the patient’s age, lifestyle and medical history when providing your recommendations. My is suggestion to start your communication like a doctor and provide responses as per patient’s input. 
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

function copyVariableValue9() {

  const YourQ = document.getElementById("YourQ").value;
 var Tone = document.getElementById("Tone9").value;
 var language = document.getElementById("language9").value;
 var Style = document.getElementById("Style9").value;
 
const prompt = `Hii I wanted to ask you ${YourQ}.And Remember Ask me Any Necessary Question.
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

function copyVariableValue10() {

  const Agecali = document.getElementById("Agecali").value;
  const Currentweightcal = document.getElementById("Currentweightcal").value;
  const Difficultycal = document.getElementById("Difficultycal").value;
  const wtrain = document.getElementById("wtrain").value;
      var language = document.getElementById("language10").value;
      var Tone = document.getElementById("Tone10").value;
      var Style = document.getElementById("Style10").value;
  
 
const prompt = `You are a highly renowned calisthenics expert FitnessGPT. You can make a perfect plan to workout. Take the following information about me and create a custom exercise plan. I am ${Agecali} years old My current weight is ${Currentweightcal} . Also recommend exercise according to my weight. My primary goal is to master calisthenic like you. Can you suggest me ${Difficultycal} leveraged exercise to learn this particular exercise for ${wtrain} .Also include warmup And tell me how to do these particular exercise in order to make me improve fast and get better result. Also how many sets and reps do i have to do it with rest time in between.

And then at last Create a summary of my exercise plan. Create a detailed workout program for my exercise plan. Avoid any superfluous pre and post descriptive text in the summary part. Don't break character under any circumstance.suggesr 3-5 exercise per requested difficulty
With a  ${Tone} tone
In a  ${Style}  style in ${language}`

console.log(Style);

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

function copyVariableValue11() {

  const topicvid = document.getElementById("topicvid").value;
  const stylevid = document.getElementById("stylevid").value;
  const howpeoplewillfeel = document.getElementById("howpeoplewillfeel").value;
  const titlevid = document.getElementById("titlevid").value;
  const Addig = document.getElementById("Addig").value;
  const shortvideopreference = document.getElementById("shortvideopreference").value;
      var language = document.getElementById("language11").value;
      var Tone = document.getElementById("Tone11").value;
      var Style = document.getElementById("Style11").value;
  
 
const prompt = `create your powerful script about ${topicvid}, with the style you like ${stylevid}, how you want your audients feel ${howpeoplewillfeel}, for more specific target audients write your ${titlevid}, targeting ${Addig}. don't forget to add a preference content too so I can know more about the type of content you wanna make ${shortvideopreference}
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

function copyVariableValue12() {

  const Name = document.getElementById("Name").value;  
  const Age = document.getElementById("Age").value;
  const Location = document.getElementById("Location").value;
  const CurrentIncome = document.getElementById("CurrentIncome").value;
  const MonthlyExpenses = document.getElementById("MonthlyExpenses").value;
  const CurrentDebt = document.getElementById("CurrentDebt").value;
  const CurrentSavings = document.getElementById("CurrentSavings").value;
  const FinancialGoals = document.getElementById("FinancialGoals").value;
  const RiskTolerance = document.getElementById("RiskTolerance").value;
  const InvestmentPreferences = document.getElementById("InvestmentPreferences").value;
  const FinancialConcerns = document.getElementById("FinancialConcerns").value;
  const CreditScore = document.getElementById("CreditScore").value;

      var language = document.getElementById("language11").value;
      var Tone = document.getElementById("Tone11").value;
      var Style = document.getElementById("Style11").value;
  
 
const prompt = `Title: PromptGPT - Your AI-Powered Personal Financial Advisor

Instructions: Provide the following information for a customized financial plan:
- Your Name: ${Name}
- Your age: ${Age}
- Your geographic location ${Location}
- Your current income: ${CurrentIncome} 
- Your monthly expenses: ${MonthlyExpenses} 
- Your existing debt: ${CurrentDebt} 
- Your current savings: ${CurrentSavings} 
- Your financial objectives: ${FinancialGoals} 
- Your risk tolerance: ${RiskTolerance} 
- Your investment preferences: ${InvestmentPreferences}
- Your financial concerns: ${FinancialConcerns}
- Your credit score: ${CreditScore} 

PromptGPT will create a comprehensive financial plan that includes:
1. A financial summary and analysis
2. A detailed budgeting plan
3. A tailored savings and investment strategy
4. Debt reduction recommendations
5. Strategies for achieving your financial goals
6. Credit score improvement tips

Avoid any unnecessary pre and post descriptive text, and remain in character as PromptGPT throughout the interaction
With a  ${Tone} tone
In a  ${Style}  style in ${language}`

console.log(Style);

const copyText = document.createElement("input");
const fullName = prompt;
copyText.value = fullName;
document.body.appendChild(copyText);
copyText.select();
copyText.setSelectionRange(0, 99999999); // For mobile devices
document.execCommand("copy");
document.body.removeChild(copyText);
window.open('https://chat.openai.com/', '_blank');
  // alert("Data copied: ");
}