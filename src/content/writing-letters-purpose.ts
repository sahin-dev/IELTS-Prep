/* General Training Task 1: letters by purpose (complaint, request, apology, invitation, application, explanation, recommendation).
   The register chapters (formal, semi-formal, informal) live in writing-task1.ts; these add purpose-specific language,
   an original Band 8–9 model letter and practice prompts. Chapters: book/writing-letters-purpose.ts */
import type { LetterType } from '@/lib/types';

export const letterPurposes: LetterType[] = [
  {
    id: 'complaint', name: 'Complaint Letter',
    phrases: [
      { h: 'Stating the purpose', items: ['I am writing to complain about…', 'I am writing to express my dissatisfaction with…', 'I wish to draw your attention to a problem with…'] },
      { h: 'Describing the problem', items: ['On [date], I purchased… from your… branch.', 'Unfortunately, when I…, I discovered that…', 'To make matters worse, …'] },
      { h: 'Explaining the effect', items: ['This has caused me considerable inconvenience.', 'As a result, I was forced to…', 'I was particularly disappointed because…'] },
      { h: 'Requesting action', items: ['I would be grateful if you could…', 'I would therefore like you to…', 'I expect a full refund / a replacement / an explanation.'] }
    ],
    sample: {
      prompt: 'You recently stayed at a hotel and were unhappy with your room and with the service.<br>Write a letter to the hotel manager. In your letter<br>• give details of your stay<br>• explain what the problems were<br>• say what you would like the manager to do<br><br>Begin your letter as follows: <i>Dear Sir or Madam,</i>',
      answer: `<p>Dear Sir or Madam,</p>
<p>I am writing to complain about my recent stay at the Riverside Hotel, where I spent three nights from 14 to 17 October in room 412.</p>
<p>When I booked, I specifically requested a quiet room because I was attending a conference and needed to rest. However, the room I was given overlooked the hotel's delivery entrance, and lorries arrived from five o'clock every morning. In addition, the air conditioning did not work, so the room was extremely hot. I reported both problems to reception on my first evening and was told that I would be moved the following day, but nobody contacted me, and when I asked again I was informed that the hotel was full.</p>
<p>As a result, I slept very little and was exhausted during my conference presentations. I was particularly disappointed because I had chosen your hotel on the strength of its reputation for customer service.</p>
<p>I would therefore be grateful if you could refund the cost of at least two of the three nights, and I would also appreciate an explanation of why my requests were ignored.</p>
<p>I look forward to hearing from you.</p>
<p>Yours faithfully,<br>Leila Haddad</p>`
    },
    practice: [
      'You ordered some furniture online, but it arrived late and was damaged. Write a letter to the company. In your letter: give details of your order; describe what was wrong; say what you want the company to do.',
      'Your neighbours have been making a lot of noise late at night. Write a letter to the building manager. In your letter: describe the noise; explain how it is affecting you; suggest what the manager should do.',
      'You attended an evening course at a local college, but it was very different from the description. Write a letter to the college director. In your letter: describe the course you attended; explain how it was different from what was advertised; say what you would like the college to do.'
    ]
  },
  {
    id: 'request', name: 'Request Letter',
    phrases: [
      { h: 'Stating the purpose', items: ['I am writing to enquire about…', 'I am writing to ask whether it would be possible to…', 'I am writing to request…'] },
      { h: 'Polite (indirect) requests', items: ['I would be grateful if you could…', 'I would appreciate it if you could let me know…', 'Could you please tell me whether…?', 'I was wondering whether…'] },
      { h: 'Giving reasons', items: ['The reason for my request is that…', 'This is because…', 'I need this information in order to…'] },
      { h: 'Closing', items: ['Thank you in advance for your help.', 'I look forward to your reply.', 'Please do not hesitate to contact me on…'] }
    ],
    sample: {
      prompt: 'You would like to take a week off work to attend a family event in another country.<br>Write a letter to your manager. In your letter<br>• explain why you need time off<br>• say when you would like to take the time off<br>• suggest how your work could be covered while you are away<br><br>Begin your letter as follows: <i>Dear Ms Grant,</i>',
      answer: `<p>Dear Ms Grant,</p>
<p>I am writing to ask whether it would be possible for me to take five days of annual leave next month.</p>
<p>My younger sister is getting married in Lisbon on Saturday 14 June, and as the eldest member of my family, I have been asked to give a speech at the ceremony. My parents are also travelling from Brazil, so it will be the first time in four years that the whole family has been together. It would mean a great deal to me to be there.</p>
<p>I would like to take leave from Wednesday 11 to Tuesday 17 June, which would allow me to travel, attend the celebrations and return in time for the team meeting on Wednesday 18 June. I am aware that this is a busy period, so I would aim to complete the monthly sales report before I leave. In addition, Tom Hughes has kindly agreed to deal with my client enquiries, and I would brief him fully on any outstanding issues.</p>
<p>I would be grateful if you could let me know whether these dates are acceptable.</p>
<p>Yours sincerely,<br>Marco Silva</p>`
    },
    practice: [
      'You want to join a sports club in your area but have some questions. Write to the club secretary. In your letter: say what sport you are interested in; ask about membership fees and training times; ask whether you can try a session before joining.',
      'You need a reference from a former teacher for a job application. Write to the teacher. In your letter: remind the teacher who you are; explain what the job is; say what information the reference should include.',
      'You would like your company to allow employees to work from home one day a week. Write to the human resources manager. In your letter: describe what you would like; explain the benefits for staff and the company; suggest how the arrangement could work.'
    ]
  },
  {
    id: 'apology', name: 'Apology Letter',
    phrases: [
      { h: 'Apologising', items: ['I am writing to apologise for…', 'I am really sorry about… (informal)', 'Please accept my sincere apologies for…'] },
      { h: 'Explaining (not excusing)', items: ['Unfortunately, … at the last minute.', 'What happened was that…', 'I should have…, but…'] },
      { h: 'Making amends', items: ['To make up for it, I would like to…', 'I will of course pay for…', 'Could I suggest that we…?'] },
      { h: 'Reassuring', items: ['I can assure you that this will not happen again.', 'I hope you can forgive me.', 'I really hope we can… soon.'] }
    ],
    sample: {
      prompt: 'You borrowed a camera from a friend while you were on holiday, but you damaged it.<br>Write a letter to your friend. In your letter<br>• explain what happened to the camera<br>• apologise for the damage<br>• say what you will do about it<br><br>Begin your letter as follows: <i>Dear Sam,</i>',
      answer: `<p>Dear Sam,</p>
<p>I hope you're well. I'm afraid I'm writing with some bad news about the camera you so kindly lent me for my trip to Scotland.</p>
<p>On our last day, we went on a boat trip to see the seals, and I was taking photographs from the deck when a large wave hit the side of the boat. I lost my balance and dropped the camera on the wet floor. It still turns on, but the screen is badly cracked and the lens makes a strange grinding noise when it zooms.</p>
<p>I'm really sorry, Sam. I know how much you love that camera, and I should have kept the strap around my neck, as you told me to. I feel terrible about it.</p>
<p>I've already taken it to a repair shop near my office, and they think they can replace both the screen and the lens motor within a week. Of course, I'll pay for the whole repair. If it can't be fixed properly, I'll buy you the same model – I've checked, and it's still available.</p>
<p>Thanks again for trusting me with it. I'll bring it round as soon as it's ready – and lunch will be on me!</p>
<p>Best wishes,<br>Alex</p>`
    },
    practice: [
      'You missed an important meeting with a colleague. Write a letter to your colleague. In your letter: apologise for missing the meeting; explain why you could not attend; suggest another time to meet.',
      'You stayed with a family abroad and accidentally broke something valuable in their home. Write a letter to the family. In your letter: thank them for their hospitality; explain what happened; offer to put things right.',
      'You were unable to attend a friend\'s birthday party. Write a letter to your friend. In your letter: apologise for not going; explain the reason; suggest how you could celebrate together.'
    ]
  },
  {
    id: 'invitation', name: 'Invitation Letter',
    phrases: [
      { h: 'Inviting', items: ['I\'m writing to invite you to… (informal)', 'I would like to invite you to… (formal)', 'It would be lovely if you could come to…', 'I would be delighted if you could attend…'] },
      { h: 'Giving details', items: ['It will take place on… at…', 'The party starts at… and will go on until…', 'There will be…'] },
      { h: 'Persuading', items: ['It would mean a lot to me if you were there.', 'You\'ll get to meet…', 'I know how much you enjoy…'] },
      { h: 'Practical information and reply', items: ['You\'re welcome to stay at…', 'The easiest way to get there is…', 'Could you let me know by… whether you can make it?', 'Please confirm your attendance by…'] }
    ],
    sample: {
      prompt: 'You are organising a celebration for your parents\' wedding anniversary.<br>Write a letter to a friend who lives in another city. In your letter<br>• invite your friend to the celebration<br>• give details of the event<br>• explain how your friend could help with the preparations<br><br>Begin your letter as follows: <i>Dear Priya,</i>',
      answer: `<p>Dear Priya,</p>
<p>I hope you and the family are all well. I'm writing because I've got some exciting news – it's my parents' thirtieth wedding anniversary next month, and my brother and I are planning a surprise party for them. We'd both love you to come.</p>
<p>The party will be on Saturday 9 May at the Garden Room, the restaurant by the lake where my parents had their first date. Guests are arriving at seven so that we can all be there when Mum and Dad walk in at half past. There'll be a buffet dinner, a short slideshow of family photos and, of course, dancing – my father still thinks he's the best dancer in the family!</p>
<p>Since you're so talented with design, I was wondering whether you could help us with the invitations and decorations. Nothing complicated – perhaps a simple invitation card we could send by email, and a few ideas for flowers and table decorations. You're very welcome to stay with us for the weekend, and I can pick you up from the station.</p>
<p>Could you let me know by the end of next week whether you can make it? It really wouldn't be the same without you.</p>
<p>Lots of love,<br>Meena</p>`
    },
    practice: [
      'You are organising a reunion for people who studied with you at school. Write a letter to a former classmate. In your letter: invite them to the reunion; give details of the event; explain what you would like them to bring.',
      'Your company is holding an event for clients. Write a letter to a client. In your letter: invite the client to the event; describe what will happen; explain how to confirm attendance.',
      'You have recently moved into a new home. Write a letter to a friend. In your letter: describe your new home; invite your friend to visit; suggest some things you could do together.'
    ]
  },
  {
    id: 'application', name: 'Application Letter',
    phrases: [
      { h: 'Purpose and source', items: ['I am writing to apply for the position of… advertised in/on…', 'I would like to be considered for…', 'I am writing in response to your advertisement for…'] },
      { h: 'Experience and skills', items: ['I have … years\' experience in…', 'In my current role as…, I am responsible for…', 'I have developed strong skills in…', 'I hold a qualification in…'] },
      { h: 'Motivation', items: ['I am particularly interested in this position because…', 'I believe I would be well suited to this role because…', 'I would welcome the opportunity to…'] },
      { h: 'Availability and closing', items: ['I am available for interview at any time.', 'I could start on…', 'I have enclosed my CV.', 'Thank you for considering my application.'] }
    ],
    sample: {
      prompt: 'You have seen an advertisement for volunteers to help at an international sports event in your city.<br>Write a letter to the organisers. In your letter<br>• explain why you would like to volunteer<br>• describe any relevant skills and experience<br>• say when you would be available<br><br>Begin your letter as follows: <i>Dear Sir or Madam,</i>',
      answer: `<p>Dear Sir or Madam,</p>
<p>I am writing to apply to volunteer at the International Athletics Championships, which I saw advertised on the city council's website.</p>
<p>I have been a keen runner for many years and have attended several major sporting events as a spectator, so I would welcome the chance to see how such an event is organised from the inside. I also believe that the championships are an excellent opportunity to show visitors the best of our city, and I would be proud to be part of that.</p>
<p>I believe my experience would be useful in a number of roles. I currently work as a receptionist at a large hotel, where I deal with guests from all over the world, so I am used to handling enquiries calmly and courteously, often under pressure. I speak English, Spanish and some French, and I hold a first-aid certificate, which I renewed last year. In addition, I helped to organise a charity fun run for 500 participants last spring.</p>
<p>I would be available for the whole period of the championships, from 2 to 10 August, and could attend training sessions at weekends beforehand.</p>
<p>Thank you for considering my application.</p>
<p>Yours faithfully,<br>Carlos Mendes</p>`
    },
    practice: [
      'You have seen an advertisement for a part-time job in a bookshop. Write a letter to the manager. In your letter: say which job you are applying for; describe your relevant experience; explain why you would be suitable.',
      'You would like to take a short course at a college abroad. Write a letter to the course director. In your letter: say which course you would like to take; explain why you want to take it; ask about accommodation.',
      'Your local library is looking for people to run reading sessions for children. Write a letter to the librarian. In your letter: explain why you are interested; describe your skills; say when you would be available.'
    ]
  },
  {
    id: 'explanation', name: 'Explanation Letter',
    phrases: [
      { h: 'Introducing the situation', items: ['I am writing to explain why…', 'I would like to explain what happened on…', 'I thought I should let you know about…'] },
      { h: 'Explaining causes and sequence', items: ['The main reason for this is that…', 'This was due to…', 'First…, and then…', 'As a result, …'] },
      { h: 'Clarifying', items: ['To be clear, …', 'What I mean is that…', 'I should point out that…'] },
      { h: 'Next steps', items: ['In future, I will…', 'I would suggest that we…', 'Please let me know if you need any further information.'] }
    ],
    sample: {
      prompt: 'You recently missed a deadline for submitting a piece of work for an evening course.<br>Write a letter to your tutor. In your letter<br>• explain why you missed the deadline<br>• say what you have done about the work so far<br>• suggest a new date for submitting it<br><br>Begin your letter as follows: <i>Dear Dr Evans,</i>',
      answer: `<p>Dear Dr Evans,</p>
<p>I am writing to explain why I was unable to submit my project on urban planning by last Friday's deadline, and to ask whether I could have a short extension.</p>
<p>Two weeks ago, my company moved me to a different department at very short notice to cover for a colleague who had become seriously ill. As a result, I have been working until eight or nine o'clock most evenings, and I have also had to attend training sessions at weekends. I had planned to complete the project during that period, so I simply did not have the time I had expected.</p>
<p>I should point out that the project is well under way. I have completed the research, including the survey of local residents that we discussed in class, and I have written the first two sections, which cover the history of the district and the results of the survey. What remains is the final section on recommendations and the conclusion.</p>
<p>My colleague returns to work on Monday, so my normal hours will resume. I would therefore like to suggest submitting the completed project by Friday 22 March, if that would be acceptable.</p>
<p>Thank you for your understanding.</p>
<p>Yours sincerely,<br>Hannah Kowalski</p>`
    },
    practice: [
      'You have been unable to pay your rent on time this month. Write a letter to your landlord. In your letter: explain why you could not pay; say when you will be able to pay; suggest how to avoid the problem in future.',
      'You recently returned a library book that was damaged. Write a letter to the librarian. In your letter: explain how the book was damaged; apologise for the damage; offer to pay for it.',
      'A friend has asked why you did not reply to their messages for several weeks. Write a letter to your friend. In your letter: explain what you have been doing; describe the reason you did not reply; suggest meeting soon.'
    ]
  },
  {
    id: 'recommendation', name: 'Recommendation Letter',
    phrases: [
      { h: 'Introducing the recommendation', items: ['You asked me to recommend…, so… (informal)', 'I would highly recommend…', 'I am writing to recommend… for the position of… (formal)'] },
      { h: 'Giving reasons with detail', items: ['What I like most about it is that…', 'It is particularly good for…', 'One of its main advantages is…', 'For example, …'] },
      { h: 'Balanced advice', items: ['The only drawback is that…', 'I would suggest that you…', 'If I were you, I would…', 'It\'s worth booking in advance.'] },
      { h: 'Closing', items: ['I\'m sure you\'ll love it.', 'Let me know how it goes!', 'I have no hesitation in recommending… (formal)'] }
    ],
    sample: {
      prompt: 'A friend is planning to visit your country for a week and has asked for your advice.<br>Write a letter to your friend. In your letter<br>• recommend a place your friend should visit<br>• explain why you recommend it<br>• give advice about travelling there<br><br>Begin your letter as follows: <i>Dear Tom,</i>',
      answer: `<p>Dear Tom,</p>
<p>It was great to hear that you've finally booked your trip! You asked where you should go if you only have a week, and my answer is easy: spend at least three days in Hoi An, on the central coast.</p>
<p>What I love most about Hoi An is its old town, which has hardly changed in two hundred years. The narrow streets are lined with yellow merchant houses, and in the evening thousands of silk lanterns are lit along the river – it's one of the most beautiful sights I know. It's also a great place for food: you have to try cao lầu, a noodle dish you can only find there. And if you get tired of the town, the beach is only fifteen minutes away by bicycle.</p>
<p>The easiest way to get there is to fly to Da Nang and take a taxi, which takes about forty minutes. I'd recommend staying in a guesthouse just outside the old town, as it's quieter and much cheaper. The only drawback is the heat in summer, so try to do your sightseeing early in the morning and keep the afternoons for the beach.</p>
<p>I'm sure you'll love it. Send me lots of photos!</p>
<p>All the best,<br>Linh</p>`
    },
    practice: [
      'A colleague is looking for a good place to hold a team dinner. Write a letter to your colleague. In your letter: recommend a restaurant; explain why it would be suitable; give practical advice about booking.',
      'A former employee of yours has applied for a job with another company and has asked you for a recommendation. Write a letter to the new employer. In your letter: explain how you know the person; describe their skills and qualities; say why you recommend them.',
      'A friend wants to start learning a new skill and has asked for your advice. Write a letter to your friend. In your letter: recommend a course or method; explain why you think it is good; suggest how your friend could get started.'
    ]
  }
];
