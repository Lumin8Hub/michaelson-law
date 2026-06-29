export type Practice = {
  slug: string;
  ix: string;
  title: string;
  blurb: string;
  summary: string;
  body: string[];
  recover: string[];
  faqs: { q: string; a: string }[];
};

export const PRACTICE: Practice[] = [
  {
    slug: "motor-vehicle-accidents",
    ix: "01",
    title: "Motor Vehicle Accidents",
    blurb:
      "Car, motorcycle, pedestrian, cyclist and transit collisions — and the two separate claims most people don't know they have.",
    summary:
      "After a serious collision in Ontario, two claims usually run at the same time — and missing either one can cost you.",
    body: [
      "Most people injured in a crash are dealing with pain, lost income, and an insurer asking for a recorded statement before they understand their rights. Daniel handles both tracks of an Ontario motor vehicle claim: the accident-benefits claim with your own insurer (for treatment, income replacement, and care, regardless of fault), and the tort claim against the at-fault driver (for pain and suffering and losses your benefits don't cover).",
      "He guides you through the paperwork, the medical assessments, and the insurer tactics — so your energy goes to recovery, not to fighting forms. And when the other vehicle is never identified, he knows how to prove the claim anyway: in <em>Azzopardi v. John Doe</em>, he defeated an insurer's attempt to cap an injured motorcyclist's recovery at $200,000 in a hit-and-run case.",
    ],
    recover: [
      "Income replacement and the value of work you can no longer do",
      "Medical, rehabilitation and attendant-care costs",
      "Pain and suffering where the injury threshold is met",
      "Out-of-pocket and future-care expenses",
    ],
    faqs: [
      {
        q: "How long do I have to sue after a car accident?",
        a: "Generally two years from the accident for a tort claim, but accident-benefits deadlines come much sooner — notice to your insurer within seven days and an application within thirty. Because the clocks are short and strict, it's best to call early.",
      },
    ],
  },
  {
    slug: "medical-malpractice",
    ix: "02",
    title: "Medical Malpractice &amp; Negligence",
    blurb:
      "Misdiagnosis, surgical error, delayed diagnosis, birth injury and medication harm — when the care that was supposed to help caused harm instead.",
    summary:
      "Medical-negligence cases are among the hardest a plaintiff can bring. They're also among the most important to get right.",
    body: [
      "When a doctor, nurse, or hospital falls below the accepted standard of care and a patient is harmed, the law allows that patient — or a grieving family — to seek accountability. These are demanding cases: they turn on detailed records and credible expert evidence, and institutional defendants defend them hard.",
      "Daniel will be honest with you from the start about whether the evidence supports a claim, and he builds the ones he takes on with the careful, expert-driven approach these cases demand.",
    ],
    recover: [
      "The cost of future care, treatment and rehabilitation",
      "Lost income and loss of earning capacity",
      "Pain, suffering and loss of enjoyment of life",
      "A family's losses in cases of fatal negligence",
    ],
    faqs: [
      {
        q: "How do I know if it was really malpractice and not just a bad outcome?",
        a: "Not every bad outcome is negligence — medicine carries real risk even when everyone does their job. The legal question is whether the care fell below the standard a reasonable provider would have met, and whether that failure caused the harm. Answering it takes a review of the records and an independent medical expert, which is exactly where a proper assessment begins.",
      },
    ],
  },
  {
    slug: "catastrophic-injury",
    ix: "03",
    title: "Catastrophic Injury",
    blurb:
      "Brain and spinal-cord injuries, amputations and other life-altering harm that changes a family's future, not just a season.",
    summary:
      "When an injury is permanent, the case isn't about a single bill — it's about a lifetime of care and lost possibility.",
    body: [
      "A traumatic brain or spinal-cord injury reshapes everything: the ability to work, to live independently, to do the ordinary things a family took for granted. Properly valuing that future takes more than a settlement formula — it takes life-care planning, economic evidence, and a lawyer who understands what's at stake over decades, not months.",
      "Whether an injury meets Ontario's strict 'catastrophic impairment' definition is itself often contested by insurers — and the stakes are enormous, because that designation unlocks far higher benefit limits. In <em>Amin v. CAA Insurance</em> (2026), Daniel established a combined 55% whole-person impairment at the Licence Appeal Tribunal, securing a catastrophic-impairment designation for his client. He takes on a smaller number of these files precisely because they demand sustained, senior attention.",
    ],
    recover: [
      "Lifetime cost of attendant care and rehabilitation",
      "Home and vehicle modifications and assistive technology",
      "Loss of earning capacity and future income",
      "Pain and suffering and a family's loss of care and companionship",
    ],
    faqs: [
      {
        q: "What makes an injury 'catastrophic' in Ontario?",
        a: "It's a defined category under the auto-insurance regime that unlocks substantially higher benefit limits — covering things like serious brain injury, paraplegia or quadriplegia, blindness, and severe impairment measured as a percentage of whole-person impairment. Whether an injury qualifies is itself often contested by insurers, and getting that determination right is a critical early step.",
      },
    ],
  },
  {
    slug: "accident-benefits",
    ix: "04",
    title: "Accident Benefits &amp; LAT Disputes",
    blurb:
      "When your own insurer denies, delays, or cuts off the benefits you're entitled to after an accident.",
    summary:
      "Accident benefits are supposed to be there when you need them most. Too often, they're denied right when recovery depends on them.",
    body: [
      "After a motor vehicle accident, you're entitled to no-fault accident benefits from your own insurer — for treatment, income replacement, and care. But the process is complicated, and insurers routinely deny or terminate benefits, leaving injured people without the support that's keeping their recovery on track.",
      "Daniel pushes denied and delayed claims forward, including before the Licence Appeal Tribunal (LAT), where he recently secured a catastrophic-impairment determination for a client against the insurer's contested medical ratings. He also acts where an insurance broker's negligence left a client underinsured, and knows how insurers evaluate and defend these disputes from the inside.",
    ],
    recover: [
      "Reinstated income-replacement benefits",
      "Approved treatment and rehabilitation funding",
      "Attendant care and housekeeping benefits",
      "Interest and, where available, costs and awards",
    ],
    faqs: [
      {
        q: "My benefits were cut off. Can I fight it?",
        a: "Yes. A denial or termination is not the final word — most disputes now go to the Licence Appeal Tribunal, and many are resolved in the injured person's favour with the right medical evidence and advocacy. There are strict time limits to dispute a denial, so act quickly.",
      },
    ],
  },
  {
    slug: "slip-and-fall",
    ix: "05",
    title: "Slip &amp; Fall / Occupiers' Liability",
    blurb:
      "Ice and snow, wet floors, poor lighting, unsafe stairs and sidewalks — when a property owner's neglect put you on the ground.",
    summary:
      "Property owners and occupiers have a legal duty to keep their premises reasonably safe. When they don't, and you're hurt, they can be held responsible.",
    body: [
      "Winter ice, an unsalted walkway, a grease-slicked floor, an unlit stairwell, a gap in a sidewalk — premises injuries are common and the resulting injuries are often serious. The challenge is evidence: conditions change within hours, so the record has to be captured fast.",
      "Daniel moves quickly to preserve what matters — photographs, maintenance logs, weather data, and witnesses — and knows how to meet Ontario's tight notice deadlines for these claims.",
    ],
    recover: [
      "Medical and rehabilitation costs",
      "Lost income during recovery",
      "Pain and suffering for serious injuries",
      "Future-care needs for lasting impairments",
    ],
    faqs: [
      {
        q: "I slipped on ice — is there a deadline?",
        a: "Yes, and it's unusually short. For snow-and-ice falls, Ontario law generally requires written notice to the responsible party within sixty days, and claims against a municipality can require notice within ten. These deadlines can bar an otherwise strong claim, so prompt advice matters.",
      },
    ],
  },
  {
    slug: "fire-loss",
    ix: "06",
    title: "Fire Loss &amp; Property Damage",
    blurb:
      "Catastrophic house, building and vehicle fires — and the property and personal-injury losses that follow when negligence, faulty wiring or a defective product was the cause.",
    summary:
      "A serious fire can take a home, a business, or a life. Proving how and why it started is painstaking work — and it's where these cases are won or lost.",
    body: [
      "Fire-loss claims sit at the intersection of personal injury, property damage and product liability, and they turn on evidence that disappears fast: origin-and-cause analysis, electrical and building-code findings, and the conduct of landlords, contractors or manufacturers.",
      "Daniel has built and tried these cases for years. In <em>Kidman v. Christoforatou</em>, he acted for a family in a $5-million claim after a fire in a converted building killed two children and seriously injured another; he defeated the defendants' motion for summary judgment and won costs, sending the case to a full trial on the wiring, fire-separation and smoke-alarm failures at issue. He has also acted in defective-vehicle fire claims that drew national media attention.",
    ],
    recover: [
      "The cost to repair or replace damaged property",
      "Medical, rehabilitation and future-care costs for fire injuries",
      "Pain and suffering, and a family's losses in fatal fires",
      "Out-of-pocket living and business-interruption expenses",
    ],
    faqs: [
      {
        q: "The fire department already investigated — do I still need my own expert?",
        a: "Usually yes. A fire marshal's report answers a public-safety question, not the civil question of who is legally responsible. Proving a claim takes an independent origin-and-cause expert, and often electrical and building-code evidence — work that has to begin before the scene is cleared.",
      },
    ],
  },
  {
    slug: "wrongful-death",
    ix: "07",
    title: "Wrongful Death",
    blurb:
      "For families navigating the unthinkable after a loss caused by negligence — handled with the care the moment calls for.",
    summary:
      "No claim brings a loved one back. What it can do is hold the responsible party accountable and protect the family left behind.",
    body: [
      "When negligence takes a life — on the road, in a hospital, on someone's property, or in a fire — the law allows surviving family members to claim for their losses. Whether to pursue that claim is a deeply personal decision, and Daniel approaches these matters with patience and without pressure.",
      "Under Ontario's Family Law Act, eligible family members can recover both financial losses and the loss of the care, guidance and companionship the person provided.",
    ],
    recover: [
      "Loss of financial support and dependency",
      "Funeral and related expenses",
      "Loss of care, guidance and companionship",
      "The value of services the person provided to the family",
    ],
    faqs: [
      {
        q: "Who can bring a wrongful-death claim in Ontario?",
        a: "Generally a spouse, children, grandchildren, parents, grandparents and siblings of the person who died may claim under the Family Law Act. The estate may also have its own claim. Daniel can walk a family through who is eligible and what's involved, gently and at their own pace.",
      },
    ],
  },
  {
    slug: "disability",
    ix: "08",
    title: "Long-Term &amp; Short-Term Disability",
    blurb:
      "Denied, delayed or terminated LTD and STD benefits — when the coverage you paid for isn't there once you can no longer work.",
    summary:
      "Disability insurers decide who gets paid and who doesn't. When that decision is wrong, it can be challenged — and reversed.",
    body: [
      "When illness or injury stops you from working, long-term and short-term disability benefits are supposed to replace your income. Too often they're denied on paper-thin medical reviews, or cut off just as you've come to rely on them. Daniel takes on insurers in disability disputes — including claims that arise when a broker's negligence left a client without the coverage they thought they had.",
      "He builds these claims the same way he builds his injury files: with the medical and vocational evidence that shows, concretely, why you cannot do your job.",
    ],
    recover: [
      "Reinstated or back-paid disability benefits",
      "Continued monthly income-replacement coverage",
      "Damages where an insurer acted in bad faith",
      "Claims arising from a broker's failure to obtain proper coverage",
    ],
    faqs: [
      {
        q: "My LTD claim was denied. Is that the end of it?",
        a: "No. A denial is the insurer's position, not a final ruling — many are overturned with the right medical evidence and advocacy. There are strict time limits to challenge a denial in court, so it's important to get advice quickly rather than appealing through the insurer's internal process indefinitely.",
      },
    ],
  },
  {
    slug: "product-liability",
    ix: "09",
    title: "Product Liability",
    blurb:
      "Defective vehicles, recalled medications, and dangerous consumer products that should never have reached your hands.",
    summary:
      "Manufacturers are responsible for the safety of what they sell. When a defective product causes serious injury, they can be held to account.",
    body: [
      "A faulty component, a drug with undisclosed risks, a product that fails the way it never should — defective products cause real and sometimes catastrophic harm, including vehicle fires. Taking on a manufacturer is daunting, but it's a fight these companies should expect to face when their products hurt people.",
      "Daniel investigates how and why a product failed, retains the right engineering and medical experts, and is prepared to stand up to well-resourced corporate defendants — including in defective-vehicle fire claims that have drawn national media attention.",
    ],
    recover: [
      "Medical, rehabilitation and future-care costs",
      "Lost income and earning capacity",
      "Pain and suffering",
      "A family's losses where a product proved fatal",
    ],
    faqs: [
      {
        q: "The product was recalled after I was hurt — does that help my case?",
        a: "It can be meaningful evidence, but a recall on its own doesn't automatically prove your case. The claim still turns on showing the product was defective or unreasonably dangerous and that the defect caused your injury — which is where expert investigation comes in.",
      },
    ],
  },
  {
    slug: "long-term-care-class-actions",
    ix: "10",
    title: "Long-Term Care &amp; Class Actions",
    blurb:
      "Systemic failures in institutions that were trusted with vulnerable people — including residents and families harmed in long-term care.",
    summary:
      "Some harms aren't about a single mistake — they're about an institution that failed the people who depended on it, at scale.",
    body: [
      "When failures are systemic — affecting residents, families, and visitors across an institution — a class action can be the most effective way to seek accountability. Daniel acts as co-counsel in this kind of consequential litigation, including the long-term-care COVID-19 class actions where the Superior Court certified six of eight proposed actions to proceed in 2024.",
      "If you or a family member was harmed by an institutional failure, Daniel can tell you whether an existing class proceeding may cover you or whether an individual claim is the better path.",
    ],
    recover: [
      "Recognition and accountability for systemic failures",
      "Compensation available through certified class proceedings",
      "Individual claims where a class action isn't the right fit",
      "Representation for families navigating the process",
    ],
    faqs: [
      {
        q: "How is a class action different from suing on my own?",
        a: "A class action lets many people who were harmed in a similar way pursue accountability together, which can make it viable to take on a large institution. Whether to join a class or bring an individual claim depends on your circumstances — Daniel can help you weigh the trade-offs.",
      },
    ],
  },
];

export type CaseEntry = {
  yr: string;
  ex: string;
  title: string;
  cite: string;
  role: string;
  desc: string;
};

export const CASES: CaseEntry[] = [
  {
    yr: "2026",
    ex: "Exhibit 01",
    title: "Amin v. CAA Insurance Company",
    cite: "2026 CanLII 6233 · Licence Appeal Tribunal (AABS)",
    role: "Counsel for the applicant",
    desc: "Acting for a seriously injured accident victim, Daniel established a catastrophic impairment under Ontario's auto-insurance regime — the highest-stakes determination in accident-benefits law. The Tribunal accepted a combined 55% whole-person impairment over the insurer's contested ratings, unlocking the enhanced benefits a catastrophic designation provides.",
  },
  {
    yr: "2024",
    ex: "Exhibit 02",
    title: "Pugliese v. Chartwell",
    cite: "2024 ONSC 1135 · Ontario Superior Court of Justice",
    role: "Co-counsel for the plaintiffs (with Erik Joffe)",
    desc: "Co-counsel in one of eight proposed class actions arising from COVID-19 outbreaks in Ontario long-term-care homes. In March 2024 the court certified six of the eight actions — including the Chartwell action — to proceed as class proceedings in negligence, clearing a pivotal hurdle in one of the largest efforts to seek accountability for what happened in long-term care during the pandemic. The litigation is ongoing.",
  },
  {
    yr: "2016",
    ex: "Exhibit 03",
    title: "Decision No. 333/16",
    cite: "2016 ONWSIAT 956 · Workplace Safety and Insurance Appeals Tribunal",
    role: "Counsel for the worker (appellant)",
    desc: "On appeal from a denial by the Board, Daniel won recognition of a permanent shoulder impairment for an injured worker and his entitlement to a non-economic loss award — overturning the Board's finding after a hearing on the merits.",
  },
  {
    yr: "2014",
    ex: "Exhibit 04",
    title: "Azzopardi v. John Doe",
    cite: "2014 ONSC 4685 · Ontario Superior Court of Justice",
    role: "Co-counsel for the plaintiff",
    desc: "A motorcyclist was seriously injured after being cut off by an unidentified vehicle — no contact, no witnesses. Daniel defeated the insurer's motion to cap recovery at $200,000, winning a notable ruling that medical evidence of the 'mechanism of injury' can satisfy the corroboration the policy requires in unidentified-driver claims, and sending the case to trial.",
  },
  {
    yr: "2012",
    ex: "Exhibit 05",
    title: "Kidman v. Christoforatou",
    cite: "2012 ONSC 2981 · Ontario Superior Court of Justice",
    role: "Counsel for the plaintiffs",
    desc: "A fire in a converted building killed two children and seriously injured another. Acting for the family in a $5-million claim, Daniel defeated the defendants' motion for summary judgment and won costs, allowing the case to proceed to a full trial on the disputed wiring, fire-separation and smoke-alarm failures.",
  },
  {
    yr: "2009",
    ex: "Exhibit 06",
    title: "White (Re)",
    cite: "2009 CanLII 92119; 98 O.R. (3d) 291 · Ontario Superior Court of Justice",
    role: "Co-counsel for the successful party",
    desc: "In a reported decision, Daniel's team had a stale claim by a trustee in bankruptcy dismissed for inordinate delay — persuading the court that a trustee is held to a higher standard than a private litigant — and recovered the $200,000 in sale proceeds that had been held in court for the client.",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "How much does it cost to hire Daniel?",
    a: "Most personal-injury and medical-malpractice cases are handled on a contingency-fee basis. You pay no legal fees up front, and no legal fees at all unless your claim succeeds. The fee and disbursement arrangement is explained in writing in a retainer agreement before any work begins.",
  },
  {
    q: "Who will actually handle my case?",
    a: "Daniel will. DM Counsel is a boutique practice by design — he takes on a smaller number of files so that the senior lawyer who first assesses your case is the same one who builds it, negotiates it, and argues it.",
  },
  {
    q: "How long do I have to start a claim in Ontario?",
    a: "In most cases the basic limitation period is two years from when you knew, or reasonably ought to have known, you had a claim. But several situations have far shorter notice deadlines — seven days to notify your own auto insurer, ten days for a municipal claim, sixty days for a snow-or-ice slip and fall. These deadlines are strict, so it's best to call promptly.",
  },
  {
    q: "What should I bring to a free consultation?",
    a: "Whatever you have — an accident or police report, the name of your insurer, any medical records or correspondence, and photos. If you don't have any of it yet, that's fine too. Just tell Daniel what happened and he'll take it from there.",
  },
  {
    q: "Do I have to come to your office?",
    a: "No. Daniel meets clients across the Greater Toronto Area and, where an injury makes travel difficult, will come to you. The first conversation can happen by phone or video.",
  },
];

export const INSIGHTS: { cat: string; title: string; excerpt: string; meta: string }[] = [
  {
    cat: "After an accident",
    title: "What to do in the first 48 hours after a serious car accident in Ontario",
    excerpt:
      "A plain checklist for the moments when you're least able to think clearly — what to document, who to call, and the deadlines that start running immediately.",
    meta: "Guide · 6 min read",
  },
  {
    cat: "Medical malpractice",
    title: "Bad outcome or negligence? How the law actually draws the line",
    excerpt:
      "Medicine carries risk even when everyone does their job. Here's the legal test that separates an unfortunate result from a claim worth bringing.",
    meta: "Guide · 7 min read",
  },
  {
    cat: "The future of injury law",
    title: "Dashcams, telematics and the end of 'he said, she said'",
    excerpt:
      "Digital evidence is quietly rewriting how fault gets proven. Daniel on what location data and onboard cameras mean for your claim.",
    meta: "Perspective · 5 min read",
  },
  {
    cat: "Accident benefits",
    title: "Your insurer cut off your benefits. Here's what that actually means",
    excerpt:
      "A denial is not the final word. A practical look at the Licence Appeal Tribunal process and the evidence that turns these disputes around.",
    meta: "Guide · 6 min read",
  },
  {
    cat: "The future of injury law",
    title: "Robots in the OR: liability when the surgeon isn't the only one operating",
    excerpt:
      "Remote and robotic surgery raise questions the courts haven't fully answered. Where responsibility may land when technology is part of the team.",
    meta: "Perspective · 8 min read",
  },
  {
    cat: "Slip & fall",
    title: "Ontario's 60-day ice notice rule — and why most people miss it",
    excerpt:
      "A short, strict deadline quietly bars strong winter-fall claims every year. What the rule requires and how to protect your right to claim.",
    meta: "Guide · 4 min read",
  },
];

export const PHONE_DISPLAY = "(416) 555-0147";
export const PHONE_TEL = "+14165550147";
export const EMAIL = "daniel@dmcounsel.ca";
