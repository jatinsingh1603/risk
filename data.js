// data.js

const QUESTIONS = {
    EDM: [
        {
            id: "Q1",
            text: "1. Does the organization have a dedicated IT Governance Committee?",
            options: [
                "Yes, formal committee meets quarterly or more",
                "Informal group, no set meeting cadence",
                "Planned but not yet formed",
                "No governance committee exists"
            ]
        },
        {
            id: "Q2",
            text: "2. Is there a designated CISO or equivalent IT security leader?",
            options: [
                "Yes, full-time CISO with executive access",
                "Part-time or shared security lead",
                "Responsibility sits with IT Manager",
                "No dedicated security ownership"
            ]
        },
        {
            id: "Q3",
            text: "3. How frequently does leadership review IT risks and strategy?",
            options: [
                "Monthly or more often",
                "Quarterly",
                "Annually",
                "Ad-hoc / rarely"
            ]
        },
        {
            id: "Q4",
            text: "4. Is there a documented IT governance policy approved by senior management?",
            options: [
                "Yes, reviewed and updated annually",
                "Exists but not reviewed recently",
                "Draft exists, not formally approved",
                "No policy exists"
            ]
        },
        {
            id: "Q5",
            text: "5. How are IT investment decisions made?",
            options: [
                "Formal business case with ROI review",
                "IT proposes, management approves informally",
                "Ad-hoc based on urgency",
                "No structured process"
            ]
        },
        {
            id: "Q6",
            text: "6. Is there a defined Risk Appetite Statement for IT?",
            options: [
                "Yes, formally documented and approved",
                "Informally understood by leadership",
                "Under development",
                "No risk appetite defined"
            ]
        }
    ],
    APO: [
        {
            id: "Q1",
            text: "1. Does the organization have a documented IT strategic plan?",
            options: [
                "Yes, 3–5 year plan with annual review",
                "1-year rolling IT plan exists",
                "Informal goals, not documented",
                "No IT strategic plan"
            ]
        },
        {
            id: "Q2",
            text: "2. How is the IT budget planned and allocated?",
            options: [
                "Formal annual budget with quarterly reviews",
                "Annual budget reviewed once per year",
                "Budget allocated on demand",
                "No formal IT budget process"
            ]
        },
        {
            id: "Q3",
            text: "3. Is there a formal IT risk management framework?",
            options: [
                "Yes, with risk register updated regularly",
                "Risk assessed project-by-project",
                "Risks identified but not tracked formally",
                "No risk management framework"
            ]
        },
        {
            id: "Q4",
            text: "4. How are IT projects prioritized?",
            options: [
                "Formal PMO with scoring criteria",
                "IT leadership prioritizes with business input",
                "First-come-first-served",
                "No prioritization process"
            ]
        },
        {
            id: "Q5",
            text: "5. Is vendor and third-party IT risk formally assessed?",
            options: [
                "Yes, assessed before onboarding and annually",
                "Assessed for major vendors only",
                "Ad-hoc assessment when issues arise",
                "No vendor risk assessment process"
            ]
        },
        {
            id: "Q6",
            text: "6. Are IT staff roles and responsibilities formally defined?",
            options: [
                "Yes, with competency frameworks",
                "Roles defined, skills informally assessed",
                "Roles exist but overlap frequently",
                "Unclear roles and responsibilities"
            ]
        }
    ],
    BAI: [
        {
            id: "Q1",
            text: "1. Is there a formal Software Development Lifecycle (SDLC) process?",
            options: [
                "Yes, documented and followed consistently",
                "Exists but inconsistently applied",
                "Informal process understood by developers",
                "No SDLC process"
            ]
        },
        {
            id: "Q2",
            text: "2. How is change management handled for production systems?",
            options: [
                "Formal CAB (Change Advisory Board) approves all changes",
                "Manager approval required before changes",
                "Developer self-approval with documentation",
                "No change management process"
            ]
        },
        {
            id: "Q3",
            text: "3. Are new systems or features tested before going live?",
            options: [
                "Yes, formal QA with test documentation",
                "Testing done but not documented",
                "Minimal testing, mostly spot checks",
                "No formal testing before release"
            ]
        },
        {
            id: "Q4",
            text: "4. How is data migration handled when systems change?",
            options: [
                "Formal data migration plan with rollback strategy",
                "Migration planned but rollback not tested",
                "Migration done ad-hoc",
                "No migration planning process"
            ]
        },
        {
            id: "Q5",
            text: "5. Are security requirements included in system development?",
            options: [
                "Yes, security built in from design phase (Secure SDLC)",
                "Security reviewed before launch only",
                "Security added after incidents",
                "Security not part of development process"
            ]
        },
        {
            id: "Q6",
            text: "6. Is there a formal process for evaluating and acquiring third-party software?",
            options: [
                "Yes, with security and compliance review",
                "Business review only, no security check",
                "Ad-hoc evaluation by requesting team",
                "No evaluation process"
            ]
        }
    ],
    DSS: [
        {
            id: "Q1",
            text: "1. What is the organization's documented system uptime target (SLA)?",
            options: [
                "99.9% or higher with formal SLA",
                "99%–99.9% with informal target",
                "Uptime tracked but no target defined",
                "No uptime monitoring or target"
            ]
        },
        {
            id: "Q2",
            text: "2. How are IT incidents and outages managed?",
            options: [
                "Formal incident response process with defined SLAs",
                "Informal process, incidents handled case-by-case",
                "Only major incidents get formal response",
                "No incident management process"
            ]
        },
        {
            id: "Q3",
            text: "3. How frequently is data backed up and tested?",
            options: [
                "Daily backup with monthly restore testing",
                "Daily backup, restore never tested",
                "Weekly backup, no testing",
                "No formal backup process"
            ]
        },
        {
            id: "Q4",
            text: "4. Is there a documented Disaster Recovery Plan (DRP)?",
            options: [
                "Yes, tested within the last 12 months",
                "Exists but never tested",
                "Under development",
                "No DRP exists"
            ]
        },
        {
            id: "Q5",
            text: "5. Is there a formal IT helpdesk or ticketing system?",
            options: [
                "Yes, with SLA tracking and reporting",
                "Ticketing system exists, SLAs not tracked",
                "Email-based support, no ticketing",
                "No formal support process"
            ]
        },
        {
            id: "Q6",
            text: "6. Is there a Business Continuity Plan (BCP) for critical IT systems?",
            options: [
                "Yes, tested and updated annually",
                "Exists but not tested",
                "Under development",
                "No BCP exists"
            ]
        }
    ],
    MEA: [
        {
            id: "Q1",
            text: "1. Are IT performance KPIs tracked and reported regularly?",
            options: [
                "Yes, monthly dashboard reported to leadership",
                "KPIs tracked but not reported upward",
                "Tracked informally by IT team only",
                "No KPIs defined or tracked"
            ]
        },
        {
            id: "Q2",
            text: "2. Are internal IT audits conducted regularly?",
            options: [
                "Yes, at least annually by internal audit team",
                "Conducted every 2–3 years",
                "Only done when issues arise",
                "No internal IT audits conducted"
            ]
        },
        {
            id: "Q3",
            text: "3. Is the organization compliant with relevant regulations (GDPR, SOC2, ISO 27001, etc.)?",
            options: [
                "Yes, certified with active compliance program",
                "Compliant but not formally certified",
                "Partial compliance, gaps identified",
                "Compliance not assessed"
            ]
        },
        {
            id: "Q4",
            text: "4. Are findings from past audits tracked and resolved?",
            options: [
                "Yes, formal remediation tracker with deadlines",
                "Tracked informally, some items unresolved",
                "Findings noted but rarely acted upon",
                "No tracking of audit findings"
            ]
        },
        {
            id: "Q5",
            text: "5. Is there a formal process for monitoring third-party compliance?",
            options: [
                "Yes, annual vendor compliance reviews",
                "Reviewed for critical vendors only",
                "Ad-hoc review when contracts renew",
                "No third-party compliance monitoring"
            ]
        },
        {
            id: "Q6",
            text: "6. Is security awareness training conducted for all employees?",
            options: [
                "Yes, mandatory annual training with testing",
                "Training offered but not mandatory",
                "Training done once at onboarding only",
                "No security awareness training"
            ]
        }
    ]
};

// Fallback Mock Data in case Webhook GET returns 404
const MOCK_VENDORS = [
    {
        domain: "salesforce.com",
        analystEmail: "analyst@company.com",
        submittedAt: "2026-04-18T10:30:00Z",
        overallScore: 4.8,
        status: "Pass",
        domainScores: { EDM: 4.5, APO: 5.0, BAI: 4.8, DSS: 4.9, MEA: 4.8 },
        sections: {
            EDM: {
                Q1: "Yes, formal committee meets quarterly or more",
                Q2: "Yes, full-time CISO with executive access",
                Q3: "Monthly or more often",
                Q4: "Yes, reviewed and updated annually",
                Q5: "Formal business case with ROI review",
                Q6: "Yes, formally documented and approved"
            },
            APO: {
                Q1: "Yes, 3–5 year plan with annual review",
                Q2: "Formal annual budget with quarterly reviews",
                Q3: "Yes, with risk register updated regularly",
                Q4: "Formal PMO with scoring criteria",
                Q5: "Yes, assessed before onboarding and annually",
                Q6: "Yes, with competency frameworks"
            },
            BAI: {
                Q1: "Yes, documented and followed consistently",
                Q2: "Formal CAB (Change Advisory Board) approves all changes",
                Q3: "Yes, formal QA with test documentation",
                Q4: "Formal data migration plan with rollback strategy",
                Q5: "Yes, security built in from design phase (Secure SDLC)",
                Q6: "Yes, with security and compliance review"
            },
            DSS: {
                Q1: "99.9% or higher with formal SLA",
                Q2: "Formal incident response process with defined SLAs",
                Q3: "Daily backup with monthly restore testing",
                Q4: "Yes, tested within the last 12 months",
                Q5: "Yes, with SLA tracking and reporting",
                Q6: "Yes, tested and updated annually"
            },
            MEA: {
                Q1: "Yes, monthly dashboard reported to leadership",
                Q2: "Yes, at least annually by internal audit team",
                Q3: "Yes, certified with active compliance program",
                Q4: "Yes, formal remediation tracker with deadlines",
                Q5: "Yes, annual vendor compliance reviews",
                Q6: "Yes, mandatory annual training with testing"
            }
        }
    },
    {
        domain: "startup-xyz.co",
        analystEmail: "jdoe@secops.io",
        submittedAt: "2026-04-17T14:15:00Z",
        overallScore: 2.1,
        status: "Fail",
        domainScores: { EDM: 2.0, APO: 1.5, BAI: 2.5, DSS: 2.5, MEA: 2.0 },
        sections: {
            EDM: { Q1: "Informal group, no set meeting cadence", Q2: "Responsibility sits with IT Manager", Q3: "Ad-hoc / rarely", Q4: "Draft exists, not formally approved", Q5: "Ad-hoc based on urgency", Q6: "Informally understood by leadership" },
            APO: { Q1: "Informal goals, not documented", Q2: "Budget allocated on demand", Q3: "Risks identified but not tracked formally", Q4: "First-come-first-served", Q5: "Ad-hoc assessment when issues arise", Q6: "Roles exist but overlap frequently" },
            BAI: { Q1: "Informal process understood by developers", Q2: "Developer self-approval with documentation", Q3: "Minimal testing, mostly spot checks", Q4: "Migration done ad-hoc", Q5: "Security reviewed before launch only", Q6: "Ad-hoc evaluation by requesting team" },
            DSS: { Q1: "Uptime tracked but no target defined", Q2: "Informal process, incidents handled case-by-case", Q3: "Weekly backup, no testing", Q4: "Under development", Q5: "Email-based support, no ticketing", Q6: "Under development" },
            MEA: { Q1: "Tracked informally by IT team only", Q2: "Only done when issues arise", Q3: "Partial compliance, gaps identified", Q4: "Findings noted but rarely acted upon", Q5: "Ad-hoc review when contracts renew", Q6: "Training offered but not mandatory" }
        }
    }
];

window.QUESTIONS = QUESTIONS;
window.MOCK_VENDORS = MOCK_VENDORS;
