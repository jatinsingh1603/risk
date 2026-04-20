// app.js

const QUESTIONS = {
    EDM: [
        { id: "Q1", text: "1. Does the organization have a dedicated IT Governance Committee?", opts: { A: "Yes, formal committee meets quarterly", B: "Informal group, no set cadence", C: "Planned but not formed", D: "No committee exists" } },
        { id: "Q2", text: "2. Is there a designated CISO or IT security leader?", opts: { A: "Yes, full-time CISO with executive access", B: "Part-time or shared security lead", C: "Responsibility with IT Manager", D: "No dedicated security ownership" } },
        { id: "Q3", text: "3. How frequently does leadership review IT risks?", opts: { A: "Monthly or more", B: "Quarterly", C: "Annually", D: "Ad-hoc / rarely" } },
        { id: "Q4", text: "4. Is there a documented IT governance policy?", opts: { A: "Yes, reviewed annually", B: "Exists but not reviewed recently", C: "Draft, not formally approved", D: "No policy exists" } },
        { id: "Q5", text: "5. How are IT investment decisions made?", opts: { A: "Formal business case with ROI review", B: "IT proposes, management approves informally", C: "Ad-hoc based on urgency", D: "No structured process" } },
        { id: "Q6", text: "6. Is there a defined Risk Appetite Statement for IT?", opts: { A: "Yes, formally documented", B: "Informally understood", C: "Under development", D: "Not defined" } }
    ],
    APO: [
        { id: "Q1", text: "1. Does the org have a documented IT strategic plan?", opts: { A: "Yes, 3–5 year plan reviewed annually", B: "1-year rolling plan exists", C: "Informal goals, not documented", D: "No IT strategic plan" } },
        { id: "Q2", text: "2. How is the IT budget planned?", opts: { A: "Formal annual budget with quarterly reviews", B: "Annual budget reviewed once", C: "Allocated on demand", D: "No formal budget process" } },
        { id: "Q3", text: "3. Is there a formal IT risk management framework?", opts: { A: "Yes, risk register updated regularly", B: "Risk assessed project-by-project", C: "Risks identified but not tracked", D: "No framework" } },
        { id: "Q4", text: "4. How are IT projects prioritized?", opts: { A: "Formal PMO with scoring criteria", B: "IT leads with business input", C: "First-come-first-served", D: "No prioritization" } },
        { id: "Q5", text: "5. Is vendor/third-party IT risk formally assessed?", opts: { A: "Yes, before onboarding and annually", B: "Major vendors only", C: "Ad-hoc when issues arise", D: "No vendor risk assessment" } },
        { id: "Q6", text: "6. Are IT staff roles formally defined?", opts: { A: "Yes, with competency frameworks", B: "Roles defined, skills informally assessed", C: "Roles overlap frequently", D: "Unclear roles" } }
    ],
    BAI: [
        { id: "Q1", text: "1. Is there a formal SDLC process?", opts: { A: "Yes, documented and consistently followed", B: "Exists but inconsistently applied", C: "Informal process only", D: "No SDLC" } },
        { id: "Q2", text: "2. How is production change management handled?", opts: { A: "Formal CAB approves all changes", B: "Manager approval required", C: "Developer self-approval with docs", D: "No change management" } },
        { id: "Q3", text: "3. Are new systems tested before going live?", opts: { A: "Yes, formal QA with documentation", B: "Testing done but not documented", C: "Minimal spot checks", D: "No testing" } },
        { id: "Q4", text: "4. How is data migration handled?", opts: { A: "Formal plan with tested rollback strategy", B: "Planned but rollback not tested", C: "Ad-hoc migration", D: "No migration planning" } },
        { id: "Q5", text: "5. Are security requirements included in development?", opts: { A: "Yes, Secure SDLC from design phase", B: "Security reviewed before launch only", C: "Security added after incidents", D: "Not part of development" } },
        { id: "Q6", text: "6. Is there a process for evaluating third-party software?", opts: { A: "Yes, with security and compliance review", B: "Business review only", C: "Ad-hoc by requesting team", D: "No evaluation process" } }
    ],
    DSS: [
        { id: "Q1", text: "1. What is the documented uptime target (SLA)?", opts: { A: "99.9%+ with formal SLA", B: "99–99.9% with informal target", C: "Tracked but no target", D: "No monitoring or target" } },
        { id: "Q2", text: "2. How are IT incidents and outages managed?", opts: { A: "Formal process with defined SLAs", B: "Informal, case-by-case", C: "Only major incidents get formal response", D: "No incident management" } },
        { id: "Q3", text: "3. How frequently is data backed up and tested?", opts: { A: "Daily backup with monthly restore tests", B: "Daily backup, restore never tested", C: "Weekly backup, no testing", D: "No formal backup process" } },
        { id: "Q4", text: "4. Is there a documented Disaster Recovery Plan?", opts: { A: "Yes, tested within last 12 months", B: "Exists but never tested", C: "Under development", D: "No DRP" } },
        { id: "Q5", text: "5. Is there a formal IT helpdesk or ticketing system?", opts: { A: "Yes, with SLA tracking and reporting", B: "System exists, SLAs not tracked", C: "Email-based, no ticketing", D: "No formal support process" } },
        { id: "Q6", text: "6. Is there a Business Continuity Plan for critical systems?", opts: { A: "Yes, tested and updated annually", B: "Exists but not tested", C: "Under development", D: "No BCP" } }
    ],
    MEA: [
        { id: "Q1", text: "1. Are IT performance KPIs tracked and reported?", opts: { A: "Yes, monthly dashboard to leadership", B: "Tracked but not reported upward", C: "Tracked informally by IT only", D: "No KPIs defined" } },
        { id: "Q2", text: "2. Are internal IT audits conducted regularly?", opts: { A: "Yes, at least annually", B: "Every 2–3 years", C: "Only when issues arise", D: "No internal audits" } },
        { id: "Q3", text: "3. Is the org compliant with relevant regulations?", opts: { A: "Yes, certified with active program", B: "Compliant but not certified", C: "Partial compliance, gaps identified", D: "Not assessed" } },
        { id: "Q4", text: "4. Are findings from past audits tracked and resolved?", opts: { A: "Yes, formal tracker with deadlines", B: "Tracked informally, some unresolved", C: "Noted but rarely acted upon", D: "No tracking" } },
        { id: "Q5", text: "5. Is there a process for monitoring third-party compliance?", opts: { A: "Yes, annual vendor reviews", B: "Critical vendors only", C: "Ad-hoc at contract renewal", D: "No third-party monitoring" } },
        { id: "Q6", text: "6. Is security awareness training conducted?", opts: { A: "Yes, mandatory annual with testing", B: "Offered but not mandatory", C: "Once at onboarding only", D: "No training" } }
    ]
};

const TABS_ORDER = ["EDM", "APO", "BAI", "DSS", "MEA"];

// App State
let currentDomain = "";
let currentEmail = "";
let currentTab = "EDM";
let formAnswers = { EDM: {}, APO: {}, BAI: {}, DSS: {}, MEA: {} };

document.addEventListener("DOMContentLoaded", () => {
    // DOM Elements
    const sidebar = document.getElementById("sidebar");
    const vendorsList = document.getElementById("vendors-list");
    
    const views = {
        welcome: document.getElementById("view-welcome"),
        form: document.getElementById("view-form"),
        loading: document.getElementById("view-loading"),
        vendor: document.getElementById("view-vendor")
    };

    // Time-based greeting
    const setGreeting = () => {
        const hour = new Date().getHours();
        const greetingEl = document.getElementById("welcome-greeting");
        if (hour >= 5 && hour < 12) greetingEl.textContent = "Good Morning, Analyst";
        else if (hour >= 12 && hour < 17) greetingEl.textContent = "Good Afternoon, Analyst";
        else if (hour >= 17 && hour < 21) greetingEl.textContent = "Good Evening, Analyst";
        else greetingEl.textContent = "Working Late, Analyst";
    };
    setGreeting();

    const showToast = (message) => {
        const container = document.getElementById("toast-container");
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3500);
    };

    const setView = (viewName) => {
        Object.values(views).forEach(v => v.classList.remove("active"));
        if (views[viewName]) views[viewName].classList.add("active");
        
        if (viewName === "welcome") renderGlobalDashboard();
    };

    // Navigation and Logic Routing
    document.getElementById("logo-action").addEventListener("click", () => setView("welcome"));
    const mobileLogo = document.getElementById("mobile-logo-action");
    if (mobileLogo) mobileLogo.addEventListener("click", () => setView("welcome"));
    
    document.getElementById("btn-toggle-sidebar").addEventListener("click", () => {
        document.body.classList.toggle("sidebar-open");
    });

    // Dashboard View State Generator
    const renderGlobalDashboard = () => {
        const audits = Storage.getAllAudits();
        document.getElementById("dash-total").textContent = audits.length;
        
        const chartContainer = document.getElementById("dash-bar-chart");
        
        if (audits.length === 0) {
            document.getElementById("dash-avg").textContent = "0.0";
            document.getElementById("dash-pass-rate").textContent = "0%";
            chartContainer.innerHTML = "<div style='color:var(--text-muted); font-size:14px; width:100%; text-align:center;'>No governance data accumulated yet.</div>";
            return;
        }

        let totalScore = 0;
        let passCount = 0;
        
        chartContainer.innerHTML = "";
        const recent = audits.slice(-10); // chart max 10 for layout

        recent.forEach(a => {
            const hPct = (a.adjustedScore / 5) * 100;
            const color = a.adjustedScore >= 3.0 ? "var(--color-orange)" : "var(--error-color)";
            const name = a.domain.split('.')[0].substring(0,8);
            chartContainer.innerHTML += `
                <div class="bar-col" title="${a.domain} - Score: ${a.adjustedScore}">
                    <div class="bar-fill" style="height: ${hPct}%; background: ${color}"></div>
                    <div class="bar-label">${name}</div>
                </div>
            `;
        });
        
        audits.forEach(a => {
            totalScore += a.adjustedScore;
            if (a.adjustedScore >= 3.0) passCount++;
        });

        const avg = totalScore / audits.length;
        const rate = (passCount / audits.length) * 100;
        
        document.getElementById("dash-avg").textContent = avg.toFixed(1);
        document.getElementById("dash-pass-rate").textContent = `${Math.round(rate)}%`;
    };

    // Sidebar rendering
    const renderSidebar = () => {
        const audits = Storage.getAllAudits();
        vendorsList.innerHTML = "";
        
        if (audits.length === 0) {
            vendorsList.innerHTML = "<p style='font-size:13px; color:var(--text-muted)'>No audits yet. Start your first assessment.</p>";
            return;
        }

        const reversed = [...audits].reverse();
        reversed.forEach(v => {
            const card = document.createElement("div");
            card.className = "vendor-card";
            const badgeClass = v.adjustedScore >= 3.0 ? "badge-pass" : "badge-fail";
            const badgeText = v.adjustedScore >= 3.0 ? "Pass" : "Fail";
            
            card.innerHTML = `
                <div class="vendor-header">
                    <span class="vendor-name">${v.domain}</span>
                    <span class="vendor-badge ${badgeClass}">${badgeText}</span>
                </div>
                <div class="vendor-score">Maturity Score: ${v.adjustedScore} / 5.0</div>
            `;
            card.addEventListener("click", () => renderVendorReport(v.domain));
            vendorsList.appendChild(card);
        });
    };

    // Modals Initialization
    document.getElementById("btn-new-assessment").addEventListener("click", () => document.getElementById("start-modal").classList.add("show"));
    document.getElementById("btn-start-welcome").addEventListener("click", () => document.getElementById("start-modal").classList.add("show"));
    document.getElementById("btn-close-modal").addEventListener("click", () => document.getElementById("start-modal").classList.remove("show"));

    document.getElementById("btn-begin-audit").addEventListener("click", () => {
        const domain = document.getElementById("input-domain").value.trim().toLowerCase();
        const email = document.getElementById("input-email").value.trim();

        if (!domain || !email) {
            showToast("Company Domain and Analyst Email are required.");
            return;
        }

        currentDomain = domain;
        currentEmail = email;
        document.getElementById("display-domain").textContent = currentDomain;
        
        // Reset state
        formAnswers = { EDM: {}, APO: {}, BAI: {}, DSS: {}, MEA: {} };
        currentTab = "EDM";
        
        document.getElementById("start-modal").classList.remove("show");
        renderFormTab();
        updateProgressBarAndTabs();
        setView("form");
    });

    const updateProgressBarAndTabs = () => {
        let totalQs = 30; // 5 x 6
        let answeredQs = 0;
        
        TABS_ORDER.forEach(sec => {
            const answeredInSec = Object.keys(formAnswers[sec]).length;
            answeredQs += answeredInSec;
            
            const tabEl = document.querySelector(`.tab[data-tab="${sec}"]`);
            if (tabEl) {
                // If section is complete, mark it. Removes tick marks, relies on coloring handled in CSS.
                if (answeredInSec === 6) tabEl.classList.add("completed");
                else tabEl.classList.remove("completed");
                tabEl.classList.remove("error");
            }
        });

        const pct = Math.round((answeredQs / totalQs) * 100);
        document.getElementById("form-progress").style.width = `${pct}%`;
        document.getElementById("progress-text").textContent = `${pct}% Matrix Computation`;
        
        return { totalQs, answeredQs };
    };

    const renderFormTab = () => {
        document.querySelectorAll(".tab").forEach(t => {
            t.classList.toggle("active", t.dataset.tab === currentTab);
        });

        const tabIndex = TABS_ORDER.indexOf(currentTab);
        document.getElementById("btn-prev-section").style.display = tabIndex === 0 ? "none" : "block";
        document.getElementById("btn-next-section").innerHTML = tabIndex === TABS_ORDER.length - 1 ? "Submit Final Audit" : "Next Section &rarr;";

        const content = document.getElementById("form-content");
        content.innerHTML = "";
        
        const qList = QUESTIONS[currentTab];
        qList.forEach(q => {
            const block = document.createElement("div");
            block.className = "question-block";
            
            let optsHtml = "";
            ['A', 'B', 'C', 'D'].forEach(letter => {
                const optText = q.opts[letter];
                const isSelected = formAnswers[currentTab][q.id] === letter;
                optsHtml += `
                    <label class="option-label ${isSelected ? 'selected' : ''}">
                        <input type="radio" name="${currentTab}_${q.id}" class="option-input" value="${letter}" ${isSelected ? 'checked' : ''}>
                        <div class="option-indicator">${letter}</div>
                        <span class="opt-text">${optText}</span>
                    </label>
                `;
            });

            block.innerHTML = `
                <div class="question-title">${q.text}</div>
                <div class="options">${optsHtml}</div>
            `;
            content.appendChild(block);
        });

        content.querySelectorAll(".option-input").forEach(radio => {
            radio.addEventListener("change", (e) => {
                const val = e.target.value;
                const qId = e.target.name.split("_")[1];
                formAnswers[currentTab][qId] = val;
                
                const allLabels = e.target.closest(".options").querySelectorAll(".option-label");
                allLabels.forEach(l => l.classList.remove("selected"));
                e.target.closest(".option-label").classList.add("selected");
                
                updateProgressBarAndTabs();
            });
        });
    };

    document.querySelectorAll(".tab").forEach(t => {
        t.addEventListener("click", (e) => {
            currentTab = e.currentTarget.dataset.tab;
            renderFormTab();
        });
    });

    document.getElementById("btn-prev-section").addEventListener("click", () => {
        const idx = TABS_ORDER.indexOf(currentTab);
        if (idx > 0) {
            currentTab = TABS_ORDER[idx - 1];
            renderFormTab();
        }
    });

    document.getElementById("btn-next-section").addEventListener("click", () => {
        const idx = TABS_ORDER.indexOf(currentTab);
        
        if (idx < TABS_ORDER.length - 1) {
            currentTab = TABS_ORDER[idx + 1];
            renderFormTab();
        } else {
            // Check submission enforcement before launching scraping
            let incomplete = [];
            TABS_ORDER.forEach(sec => {
                if (Object.keys(formAnswers[sec]).length < 6) incomplete.push(sec);
            });
            
            if (incomplete.length > 0) {
                incomplete.forEach(sec => {
                    const t = document.querySelector(`.tab[data-tab="${sec}"]`);
                    if (t) t.classList.add("error");
                });
                showToast(`Incomplete Assessment: Please answer all questions in ${incomplete.join(", ")} before submitting.`);
                return;
            }
            
            executeSubmission();
        }
    });

    // Scraping Enhancements implementation
    async function scrapeCompanyData(domain) {
        const result = { compliance: {}, uptime: {}, privacy: {}, breaches: [], ssl: {}, scraped: false };
        const CORS_PROXY = 'https://api.allorigins.win/raw?url=';
        
        const updateTick = (id, res) => {
            const el = document.getElementById(id).querySelector('.status');
            el.className = 'status ' + res;
            el.textContent = res === 'done' ? '✓ DONE' : 'FAILED';
        };

        const fetchPage = async (url) => {
            try {
                const res = await fetch(CORS_PROXY + encodeURIComponent(url));
                if (!res.ok) return null;
                return await res.text();
            } catch { return null; }
        };

        try {
            const pages = await Promise.allSettled([
                fetchPage(`https://${domain}/security`),
                fetchPage(`https://${domain}/trust`),
                fetchPage(`https://${domain}/privacy`),
                fetchPage(`https://status.${domain}`)
            ]);

            pages.forEach(p => {
                if (p.status !== 'fulfilled' || !p.value) return;
                const html = p.value.toLowerCase();
                if (html.includes('soc 2') || html.includes('soc2')) result.compliance.soc2 = true;
                if (html.includes('iso 27001')) result.compliance.iso27001 = true;
                if (html.includes('gdpr')) result.compliance.gdpr = true;
                if (html.includes('hipaa')) result.compliance.hipaa = true;
                if (html.includes('bug bounty')) result.compliance.bugBounty = true;
                if (html.includes('penetration test')) result.compliance.pentest = true;
                if (html.includes('encryption')) result.compliance.encryption = true;
                if (html.includes('99.9')) result.uptime.sla = '99.9%';
                if (html.includes('operational')) result.uptime.currentStatus = 'operational';
                if (html.includes('outage')) result.uptime.currentStatus = 'outage';
                if (html.includes('data retention')) result.privacy.dataRetention = true;
                if (html.includes('breach notification')) result.privacy.breachNotification = true;
                result.scraped = true;
            });
            updateTick('check-security', 'done');
            updateTick('check-status', 'done');
            updateTick('check-privacy', 'done');
        } catch {
            updateTick('check-security', 'fail');
            updateTick('check-status', 'fail');
            updateTick('check-privacy', 'fail');
        }

        try {
            const hibp = await fetch(`https://haveibeenpwned.com/api/v3/breaches`);
            const all = await hibp.json();
            result.breaches = all.filter(b => b.Domain && b.Domain.toLowerCase().includes(domain.toLowerCase()));
            updateTick('check-breaches', 'done');
        } catch { updateTick('check-breaches', 'fail'); }

        updateTick('check-calc', 'done');
        return result;
    }

    function applyScrapedAdjustment(baseScore, scrapedData) {
        if (!scrapedData.scraped) return { adjustedScore: baseScore, delta: 0, signals: [] };

        let delta = 0;
        const signals = [];

        if (scrapedData.compliance.soc2) { delta += 0.2; signals.push({ type: 'positive', text: 'SOC 2 compliance detected on public security page' }); }
        if (scrapedData.compliance.iso27001) { delta += 0.2; signals.push({ type: 'positive', text: 'ISO 27001 certification mentioned publicly' }); }
        if (scrapedData.compliance.gdpr) { delta += 0.1; signals.push({ type: 'positive', text: 'GDPR compliance language found on privacy page' }); }
        if (scrapedData.compliance.bugBounty) { delta += 0.1; signals.push({ type: 'positive', text: 'Bug bounty program publicly disclosed' }); }
        if (scrapedData.compliance.pentest) { delta += 0.1; signals.push({ type: 'positive', text: 'Penetration testing mentioned publicly' }); }
        if (scrapedData.compliance.encryption) { delta += 0.1; signals.push({ type: 'positive', text: 'Encryption practices documented publicly' }); }
        if (scrapedData.uptime.currentStatus === 'operational') { delta += 0.1; signals.push({ type: 'positive', text: 'Status page shows all systems operational' }); }
        if (scrapedData.uptime.sla) { delta += 0.1; signals.push({ type: 'positive', text: `Uptime SLA of ${scrapedData.uptime.sla} found on status page` }); }
        if (scrapedData.privacy.breachNotification) { delta += 0.1; signals.push({ type: 'positive', text: 'Breach notification policy found in privacy policy' }); }
        if (scrapedData.privacy.dataRetention) { delta += 0.1; signals.push({ type: 'positive', text: 'Data retention policy publicly documented' }); }

        if (scrapedData.breaches.length > 0) {
            const penalty = Math.min(scrapedData.breaches.length * 0.3, 1.0);
            delta -= penalty;
            signals.push({ type: 'negative', text: `${scrapedData.breaches.length} historical data breach(es) found in public records` });
        }
        if (scrapedData.uptime.currentStatus === 'outage') {
            delta -= 0.3;
            signals.push({ type: 'negative', text: 'Active outage detected on status page at time of audit' });
        }
        if (scrapedData.ssl && scrapedData.ssl.strong === false) {
            delta -= 0.2;
            signals.push({ type: 'negative', text: `SSL certificate grade is ${scrapedData.ssl.grade} — below best practice` });
        }

        const adjustedScore = Math.min(5, Math.max(0, parseFloat((baseScore + delta).toFixed(1))));
        return { adjustedScore, delta: parseFloat(delta.toFixed(1)), signals };
    }

    const executeSubmission = async () => {
        document.getElementById("loading-domain").textContent = currentDomain;
        document.querySelectorAll('.status').forEach(el => { el.className = 'status'; el.textContent = 'waiting...'; });
        document.getElementById("check-security").querySelector('.status').textContent = 'checking...';
        setView("loading");

        // Timeout race condition logic
        const scraperPromise = scrapeCompanyData(currentDomain);
        const timeoutPromise = new Promise(resolve => setTimeout(() => resolve({ scraped: false }), 8500));
        
        let scrapedResult;
        try {
            scrapedResult = await Promise.race([scraperPromise, timeoutPromise]);
        } catch {
            scrapedResult = { scraped: false };
        }

        const rawScores = ScoreEngine.scoreAll(formAnswers);
        const intelResult = applyScrapedAdjustment(rawScores.overall, scrapedResult);

        const audit = {
            domain: currentDomain,
            analystEmail: currentEmail,
            submittedAt: new Date().toISOString(),
            sections: JSON.parse(JSON.stringify(formAnswers)),
            scores: rawScores,
            scrapedResult,
            intelResult,
            adjustedScore: intelResult.adjustedScore
        };

        Storage.saveAudit(audit);

        // Webhook integration - fire and forget
        try {
            const webhookPayload = {
                domain: currentDomain,
                email: currentEmail,
                results: {
                    rawScores: rawScores,
                    intelResult: intelResult,
                    adjustedScore: audit.adjustedScore,
                    finalGrade: ScoreEngine.grade(audit.adjustedScore)
                },
                questionsOpted: {}
            };

            // Map questions and selected options for the webhook payload
            for (const section of TABS_ORDER) {
                webhookPayload.questionsOpted[section] = [];
                const secAnswers = formAnswers[section];
                const secQuestions = QUESTIONS[section];
                
                secQuestions.forEach(q => {
                    const ansKey = secAnswers[q.id];
                    webhookPayload.questionsOpted[section].push({
                        questionId: q.id,
                        questionText: q.text,
                        selectedOptionKey: ansKey || null,
                        selectedOptionText: ansKey ? q.opts[ansKey] : null
                    });
                });
            }

            fetch('https://n8ntinycrows-djepemcqdub2bac7.centralindia-01.azurewebsites.net/webhook/corbit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(webhookPayload)
            }).catch(e => console.error("Webhook error:", e));
        } catch (e) {
            console.error("Failed to map webhook data:", e);
        }

        const fgGrade = ScoreEngine.grade(intelResult.adjustedScore);
        document.getElementById("success-message").innerHTML = `Audit for <strong>${currentDomain}</strong> has been saved successfully.<br>Final Network Grade: <strong>${intelResult.adjustedScore} / 5.0 — ${fgGrade}</strong>.`;
        
        document.getElementById("success-modal").classList.add("show");
    };

    document.getElementById("btn-success-close").addEventListener("click", () => {
        document.getElementById("success-modal").classList.remove("show");
        renderSidebar();
        renderGlobalDashboard();
        renderVendorReport(currentDomain);
    });

    const getRecommendation = (sec) => {
        const dict = {
            EDM: "Establish a formal IT governance committee and appoint a CISO",
            APO: "Develop an IT strategic plan aligned to business objectives",
            BAI: "Implement a formal SDLC and change management process",
            DSS: "Define SLAs, incident response procedures and test disaster recovery",
            MEA: "Introduce regular IT audits, KPI tracking and compliance reviews"
        };
        return dict[sec] || "General recommendation required.";
    };

    // Vendor Output View
    const renderVendorReport = (domain) => {
        const audit = Storage.getAuditByDomain(domain);
        if (!audit) return setView("welcome");

        const view = views.vendor;
        const passFail = audit.adjustedScore >= 3.0 ? "Pass" : "Fail";
        const gradeStr = ScoreEngine.grade(audit.adjustedScore);

        let html = `
            <div class="report-header">
                <div class="badges-container" style="margin-bottom:12px;">
                    <span class="vendor-badge ${passFail === 'Pass' ? 'badge-pass' : 'badge-fail'}">${passFail}</span>
                    <span class="score-box" style="border:1px solid var(--border-color)">Overall: ${audit.adjustedScore} / 5.0 — ${gradeStr}</span>
                    <span style="color:var(--text-muted); font-size:13px;">${new Date(audit.submittedAt).toLocaleDateString()}</span>
                </div>
                <div class="report-domain">${audit.domain}</div>
            </div>
            
            <div class="domain-scores">
                ${TABS_ORDER.map(sec => {
                    const s = audit.scores[sec] || 0;
                    const fillPct = (s / 5) * 100;
                    const isGap = s < 3.0;
                    return `
                        <div class="domain-score-card ${isGap ? 'gap' : ''}">
                            <div class="ds-title">${sec}</div>
                            <div class="ds-value">${s}</div>
                            <div class="ds-bar"><div class="ds-fill" style="width:${fillPct}%"></div></div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        if (audit.scores.gaps && audit.scores.gaps.length > 0) {
            html += `
                <div class="gaps-list">
                    <h3>&#9888; Actionable Insight Recommendations:</h3>
                    <ul>
                        ${audit.scores.gaps.map(g => `<li><strong>${g} GAP</strong>: ${getRecommendation(g)}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        // Grid specifically for the Side-by-Side Intelligence and Breach Display
        html += `<div class="intelligence-grid">`;
        
        // Public Intelligence UI
        let intelHtml = `<div class="intel-section">
            <div class="intel-header">
                <strong>Public Intelligence</strong>
                <span style="font-size:13px; color:var(--text-muted); display:block; font-family:'Inter'; font-weight:400; margin-top:4px;">Auto-gathered from public sources</span>
            </div>
            <div class="intel-list">`;
            
        if (audit.scrapedResult && audit.scrapedResult.scraped) {
            audit.intelResult.signals.forEach(sig => {
                const icon = sig.type === 'positive' ? '✓' : '✗';
                const iconClass = sig.type === 'positive' ? 'icon-pos' : 'icon-neg';
                intelHtml += `<div class="intel-item"><span class="${iconClass}">${icon}</span> ${sig.text}</div>`;
            });
            if (audit.intelResult.signals.length === 0) {
                intelHtml += `<div class="intel-item"><span class="icon-neu">—</span> No significant public intelligence found</div>`;
            }
            
            const pDiff = audit.intelResult.delta >= 0 ? `+${audit.intelResult.delta}` : audit.intelResult.delta;
            intelHtml += `
            <div style="margin-top:16px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.05); font-size:13px; color:var(--text-muted)">
                Score adjustment applied: ${pDiff} from public data<br>
                (Base: ${audit.scores.overall} &rarr; Adjusted: ${audit.adjustedScore})
            </div>`;
        } else {
            intelHtml += `
                <div style="color:var(--text-muted); font-size:14px; padding: 12px 0;">
                    Public Intelligence — Not available<br><br>
                    Data enrichment was not possible for this domain. Score based on analyst responses only.
                </div>
            `;
        }
        intelHtml += `</div></div>`;
        
        html += intelHtml;

        // Breaches Box right beside the intelligence box
        let breachHtml = `<div class="intel-section" style="border-color:rgba(239, 68, 68, 0.4);">
            <div class="intel-header" style="background:rgba(239, 68, 68, 0.1); color:#fca5a5; font-family:'Outfit';">
                <strong>Public Breach Disclosures</strong>
            </div>
            <div class="breach-grid">`;
            
        if (audit.scrapedResult && audit.scrapedResult.breaches && audit.scrapedResult.breaches.length > 0) {
            audit.scrapedResult.breaches.forEach(b => {
                const classesStr = b.DataClasses ? b.DataClasses.join(", ") : "Unknown";
                breachHtml += `
                    <div class="breach-card">
                        <div class="breach-title"><span>${b.Name}</span> <span class="breach-date">${b.BreachDate}</span></div>
                        <div class="breach-stat">${b.PwnCount ? b.PwnCount.toLocaleString() : 'Unknown'} records affected</div>
                        <div class="breach-classes">Data exposed: ${classesStr}</div>
                    </div>
                `;
            });
        } else {
            breachHtml += `<div style="padding: 20px; color: var(--success-color); font-weight:500;">No historic breaches detected in the public domain.</div>`;
        }
        breachHtml += `</div></div>`;
        
        html += breachHtml + `</div>`; // Close grid

        // Forms Breakdown
        TABS_ORDER.forEach(sec => {
            const secData = QUESTIONS[sec];
            const secAns = audit.sections[sec];
            let qHtml = `<div class="report-section" id="rs-${sec}">
                <div class="report-section-header">
                    <span>${sec} Assessment Matrix</span>
                    <span style="color:var(--color-orange)">▼</span>
                </div>
                <div class="report-q-list">`;
            
            secData.forEach(q => {
                const ansKey = secAns[q.id];
                const ansText = ansKey ? q.opts[ansKey] : "No answer";
                qHtml += `
                    <div class="report-q-block">
                        <div class="report-q-title">${q.text}</div>
                        <div class="report-q-ans"><span class="report-q-grade">${ansKey})</span> ${ansText}</div>
                    </div>
                `;
            });
            qHtml += `</div></div>`;
            html += qHtml;
        });
        
        html += `<div class="text-center" style="margin-top: 60px; margin-bottom: 20px;">
                    <button class="btn btn-secondary btn-large" style="color:#fca5a5; border-color:rgba(239,68,68,0.3)" id="btn-delete-audit">Delete Assessment Record</button>
                 </div>`;

        view.innerHTML = html;
        
        document.querySelectorAll(".report-section-header").forEach(h => {
            h.addEventListener("click", () => h.parentElement.classList.toggle("open"));
        });
        
        document.getElementById("btn-delete-audit").addEventListener("click", () => {
            if (confirm("Are you sure you want to permanently delete this audit record from the local memory bank?")) {
                Storage.deleteAudit(audit.domain);
                renderSidebar();
                setView("welcome");
            }
        });

        setView("vendor");
        if (window.innerWidth < 768) { sidebar.style.transform = "translateX(-100%)"; }
    };

    // Boot routines
    renderSidebar();
    renderGlobalDashboard();
});
