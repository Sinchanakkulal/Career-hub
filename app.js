// App State and Config
let portals = [];
let jobs = [];

// Session State
let currentUser = null;
let isRegisterMode = false;

// Pre-populated 50 career portals grouped by category
const DEFAULT_PORTALS = [
    { id: "google", name: "Google", url: "https://www.google.com/about/careers", category: "MAANG / Tech Giants", initials: "G", color: "hsl(217, 89%, 61%)" },
    { id: "microsoft", name: "Microsoft", url: "https://careers.microsoft.com", category: "MAANG / Tech Giants", initials: "MS", color: "hsl(195, 100%, 42%)" },
    { id: "apple", name: "Apple", url: "https://www.apple.com/careers", category: "MAANG / Tech Giants", initials: "AP", color: "hsl(0, 0%, 90%)" },
    { id: "amazon", name: "Amazon", url: "https://www.amazon.jobs", category: "MAANG / Tech Giants", initials: "AMZ", color: "hsl(31, 95%, 52%)" },
    { id: "meta", name: "Meta", url: "https://www.metacareers.com", category: "MAANG / Tech Giants", initials: "META", color: "hsl(214, 89%, 52%)" },
    { id: "netflix", name: "Netflix", url: "https://jobs.netflix.com", category: "MAANG / Tech Giants", initials: "NFLX", color: "hsl(357, 92%, 47%)" },
    { id: "nvidia", name: "NVIDIA", url: "https://www.nvidia.com/en-us/about-nvidia/careers", category: "AI / Hardware / Aero", initials: "NV", color: "hsl(84, 80%, 42%)" },
    { id: "tesla", name: "Tesla", url: "https://www.tesla.com/careers", category: "AI / Hardware / Aero", initials: "TSLA", color: "hsl(354, 90%, 50%)" },
    { id: "spacex", name: "SpaceX", url: "https://www.spacex.com/careers", category: "AI / Hardware / Aero", initials: "SPX", color: "hsl(210, 20%, 80%)" },
    { id: "intel", name: "Intel", url: "https://jobs.intel.com", category: "AI / Hardware / Aero", initials: "INTC", color: "hsl(206, 100%, 43%)" },
    { id: "amd", name: "AMD", url: "https://careers.amd.com", category: "AI / Hardware / Aero", initials: "AMD", color: "hsl(0, 0%, 15%)" },
    { id: "qualcomm", name: "Qualcomm", url: "https://www.qualcomm.com/company/careers", category: "AI / Hardware / Aero", initials: "QCOM", color: "hsl(207, 90%, 45%)" },
    { id: "salesforce", name: "Salesforce", url: "https://www.salesforce.com/company/careers", category: "Enterprise / SaaS", initials: "SF", color: "hsl(203, 90%, 53%)" },
    { id: "adobe", name: "Adobe", url: "https://www.adobe.com/careers.html", category: "Enterprise / SaaS", initials: "ADBE", color: "hsl(358, 92%, 50%)" },
    { id: "shopify", name: "Shopify", url: "https://www.shopify.com/careers", category: "Enterprise / SaaS", initials: "SHOP", color: "hsl(98, 51%, 46%)" },
    { id: "stripe", name: "Stripe", url: "https://stripe.com/jobs", category: "Enterprise / SaaS", initials: "STR", color: "hsl(250, 92%, 60%)" },
    { id: "zoom", name: "Zoom", url: "https://careers.zoom.us", category: "Enterprise / SaaS", initials: "ZM", color: "hsl(212, 100%, 48%)" },
    { id: "slack", name: "Slack", url: "https://slack.com/careers", category: "Enterprise / SaaS", initials: "SLK", color: "hsl(322, 75%, 46%)" },
    { id: "atlassian", name: "Atlassian", url: "https://www.atlassian.com/company/careers", category: "Enterprise / SaaS", initials: "ATL", color: "hsl(215, 95%, 52%)" },
    { id: "hubspot", name: "HubSpot", url: "https://www.hubspot.com/careers", category: "Enterprise / SaaS", initials: "HUBS", color: "hsl(14, 90%, 55%)" },
    { id: "servicenow", name: "ServiceNow", url: "https://www.servicenow.com/careers.html", category: "Enterprise / SaaS", initials: "NOW", color: "hsl(165, 80%, 40%)" },
    { id: "oracle", name: "Oracle", url: "https://www.oracle.com/corporate/careers", category: "Enterprise / SaaS", initials: "ORCL", color: "hsl(359, 85%, 45%)" },
    { id: "goldmansachs", name: "Goldman Sachs", url: "https://www.goldmansachs.com/careers", category: "Finance & Fintech", initials: "GS", color: "hsl(204, 64%, 25%)" },
    { id: "jpmorgan", name: "JPMorgan Chase", url: "https://careers.jpmorganchase.com", category: "Finance & Fintech", initials: "JPM", color: "hsl(25, 40%, 45%)" },
    { id: "paypal", name: "PayPal", url: "https://careers.pypl.com", category: "Finance & Fintech", initials: "PYPL", color: "hsl(212, 95%, 43%)" },
    { id: "visa", name: "Visa", url: "https://www.visa.com.in/about-visa/careers.html", category: "Finance & Fintech", initials: "VISA", color: "hsl(220, 90%, 35%)" },
    { id: "mastercard", name: "Mastercard", url: "https://www.mastercard.us/en-us/vision/who-we-are/careers.html", category: "Finance & Fintech", initials: "MC", color: "hsl(24, 95%, 50%)" },
    { id: "robinhood", name: "Robinhood", url: "https://careers.robinhood.com", category: "Finance & Fintech", initials: "HOOD", color: "hsl(140, 80%, 40%)" },
    { id: "coinbase", name: "Coinbase", url: "https://www.coinbase.com/careers", category: "Finance & Fintech", initials: "COIN", color: "hsl(215, 100%, 50%)" },
    { id: "spotify", name: "Spotify", url: "https://www.lifeatspotify.com", category: "Gig, Travel & Media", initials: "SPOT", color: "hsl(142, 70%, 45%)" },
    { id: "disney", name: "Disney", url: "https://jobs.disneycareers.com", category: "Gig, Travel & Media", initials: "DIS", color: "hsl(200, 100%, 30%)" },
    { id: "airbnb", name: "Airbnb", url: "https://careers.airbnb.com", category: "Gig, Travel & Media", initials: "ABNB", color: "hsl(355, 84%, 55%)" },
    { id: "uber", name: "Uber", url: "https://www.uber.com/careers", category: "Gig, Travel & Media", initials: "UBER", color: "hsl(0, 0%, 5%)" },
    { id: "lyft", name: "Lyft", url: "https://www.lyft.com/careers", category: "Gig, Travel & Media", initials: "LYFT", color: "hsl(328, 90%, 54%)" },
    { id: "nike", name: "Nike", url: "https://jobs.nike.com", category: "Gig, Travel & Media", initials: "NIKE", color: "hsl(0, 0%, 10%)" },
    { id: "walmart", name: "Walmart", url: "https://careers.walmart.com", category: "Gig, Travel & Media", initials: "WMT", color: "hsl(202, 100%, 44%)" },
    { id: "target", name: "Target", url: "https://corporate.target.com/careers", category: "Gig, Travel & Media", initials: "TGT", color: "hsl(356, 85%, 48%)" },
    { id: "deloitte", name: "Deloitte", url: "https://www.deloitte.com/careers", category: "Consulting & Tech Services", initials: "DTT", color: "hsl(84, 80%, 42%)" },
    { id: "accenture", name: "Accenture", url: "https://www.accenture.com/careers", category: "Consulting & Tech Services", initials: "ACN", color: "hsl(276, 80%, 48%)" },
    { id: "mckinsey", name: "McKinsey", url: "https://www.mckinsey.com/careers", category: "Consulting & Tech Services", initials: "MCK", color: "hsl(220, 85%, 25%)" },
    { id: "bcg", name: "Boston Consulting Group", url: "https://www.bcg.com/careers", category: "Consulting & Tech Services", initials: "BCG", color: "hsl(155, 60%, 30%)" },
    { id: "ibm", name: "IBM", url: "https://www.ibm.com/employment", category: "Consulting & Tech Services", initials: "IBM", color: "hsl(214, 85%, 45%)" },
    { id: "capgemini", name: "Capgemini", url: "https://www.capgemini.com/careers", category: "Consulting & Tech Services", initials: "CAP", color: "hsl(204, 90%, 40%)" },
    { id: "jnj", name: "Johnson & Johnson", url: "https://careers.jnj.com", category: "Healthcare & Pharma", initials: "JNJ", color: "hsl(354, 85%, 45%)" },
    { id: "pfizer", name: "Pfizer", url: "https://careers.pfizer.com", category: "Healthcare & Pharma", initials: "PFE", color: "hsl(205, 95%, 43%)" },
    { id: "moderna", name: "Moderna", url: "https://modernatx.com/careers", category: "Healthcare & Pharma", initials: "MRNA", color: "hsl(340, 85%, 48%)" },
    { id: "cvs", name: "CVS Health", url: "https://jobs.cvshealth.com", category: "Healthcare & Pharma", initials: "CVS", color: "hsl(354, 85%, 40%)" },
    { id: "unitedhealth", name: "UnitedHealth Group", url: "https://careers.unitedhealthgroup.com", category: "Healthcare & Pharma", initials: "UHG", color: "hsl(215, 80%, 38%)" },
    { id: "lilly", name: "Eli Lilly", url: "https://careers.lilly.com", category: "Healthcare & Pharma", initials: "LLY", color: "hsl(350, 80%, 42%)" },
    { id: "abbott", name: "Abbott", url: "https://www.abbott.com/careers.html", category: "Healthcare & Pharma", initials: "ABT", color: "hsl(194, 90%, 45%)" }
];

// --- Initialize State ---
function initApp() {
    const session = localStorage.getItem("careerhub_session");
    const authScreen = document.getElementById("authScreen");
    const userProfileWidget = document.getElementById("userProfileWidget");

    if (session) {
        currentUser = session;
        authScreen.classList.remove("active");
        userProfileWidget.style.display = "flex";
        document.getElementById("loggedInUserLabel").textContent = currentUser;

        const cachedPortals = localStorage.getItem(`careerhub_portals_${currentUser}`);
        const cachedJobs = localStorage.getItem(`careerhub_jobs_${currentUser}`);

        if (cachedPortals) {
            portals = JSON.parse(cachedPortals);
        } else {
            portals = DEFAULT_PORTALS.map(portal => ({
                ...portal,
                account: { username: "", notes: "", status: "not-created", updatedAt: null },
                jobsCount: Math.floor(Math.random() * 3)
            }));
            savePortalsToStorage();
        }

        if (cachedJobs) {
            jobs = JSON.parse(cachedJobs);
        } else {
            jobs = [];
            saveJobsToStorage();
        }

        renderStats();
        renderPortals();
    } else {
        currentUser = null;
        portals = [];
        jobs = [];
        authScreen.classList.add("active");
        userProfileWidget.style.display = "none";
        document.getElementById("authForm").reset();
    }

    if (!window.listenersConfigured) {
        setupEventListeners();
        window.listenersConfigured = true;
    }
}

function savePortalsToStorage() {
    if (currentUser) localStorage.setItem(`careerhub_portals_${currentUser}`, JSON.stringify(portals));
}

function saveJobsToStorage() {
    if (currentUser) localStorage.setItem(`careerhub_jobs_${currentUser}`, JSON.stringify(jobs));
}

// --- Global Stats Render ---
function renderStats() {
    document.getElementById("statTotalPortals").textContent = portals.length;
}

// --- Render Career Portals Grid ---
function renderPortals() {
    const grid = document.getElementById("portalsView");
    const searchVal = document.getElementById("searchInput").value.toLowerCase();
    const categoryVal = document.getElementById("categoryFilter").value;
    const statusVal = document.getElementById("statusFilter").value;

    grid.innerHTML = "";

    const filtered = portals.filter(portal => {
        const matchesSearch = portal.name.toLowerCase().includes(searchVal) ||
            portal.initials.toLowerCase().includes(searchVal) ||
            portal.category.toLowerCase().includes(searchVal);
        const matchesCategory = categoryVal === "all" || portal.category === categoryVal;
        const matchesStatus = statusVal === "all" || (portal.account && portal.account.status === statusVal);
        return matchesSearch && matchesCategory && matchesStatus;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="glass-panel empty-state">
                <i class="fa-solid fa-hourglass-empty"></i>
                <h3>No Career Portals Found</h3>
                <p>Try refining your search or add a custom portal manually.</p>
            </div>`;
        return;
    }

    filtered.forEach(portal => {
        if (!portal.account) {
            portal.account = { username: "", notes: "", status: "not-created", updatedAt: null };
        }
        const statusClass = portal.account.status || "not-created";
        const statusLabel = statusClass.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

        const card = document.createElement("div");
        card.className = "glass-panel portal-card";
        card.setAttribute("data-id", portal.id);

        card.innerHTML = `
            <div>
                <div class="portal-header">
                    <div class="portal-logo-wrap" style="background: linear-gradient(135deg, ${portal.color || 'var(--primary)'} 0%, hsla(222, 24%, 15%, 0.8) 100%)">
                        ${portal.initials || portal.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div class="portal-actions">
                        <a href="${portal.url}" target="_blank" class="action-icon" title="Visit career site" rel="noopener noreferrer">
                            <i class="fa-solid fa-up-right-from-square"></i>
                        </a>
                        <button class="action-icon edit-account-btn" title="Manage Account Credentials">
                            <i class="fa-solid fa-user-gear"></i>
                        </button>
                        <button class="action-icon delete-btn" title="Delete portal">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
                <div class="portal-info">
                    <h3 class="portal-name">${portal.name}</h3>
                    <span class="portal-category">${portal.category}</span>
                </div>
                <div class="portal-account-sec">
                    ${statusClass !== 'not-created' ? `
                    <div class="account-status-row">
                        <span class="status-badge ${statusClass}">
                            <i class="fa-solid ${getStatusIcon(statusClass)}"></i> ${statusLabel}
                        </span>
                    </div>` : ''}
                    ${portal.account.username ? `
                    <div class="account-email-disp">
                        <i class="fa-regular fa-envelope"></i>
                        <span>${portal.account.username}</span>
                    </div>` : ''}
                </div>
            </div>
            <div class="portal-footer">
                <span class="jobs-counter">Discovered: <strong>${portal.jobsCount || 0}</strong> jobs</span>
                <button class="btn btn-secondary btn-sm edit-account-btn">
                    <i class="fa-solid fa-shield-halved"></i> Vault
                </button>
            </div>`;

        card.querySelector(".delete-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            deletePortal(portal.id);
        });

        card.querySelectorAll(".edit-account-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                openAccountModal(portal);
            });
        });

        grid.appendChild(card);
    });
}

// --- CRUD ---
function addCustomPortal(name, url, category, initials) {
    const id = "custom-" + Date.now();
    const finalInitials = initials ? initials.toUpperCase() : name.slice(0, 2).toUpperCase();
    const colors = ["hsl(262, 80%, 60%)", "hsl(192, 95%, 48%)", "hsl(142, 70%, 45%)", "hsl(38, 92%, 50%)", "hsl(350, 80%, 55%)"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    portals.push({
        id, name, url, category,
        initials: finalInitials,
        color: randomColor,
        account: { username: "", notes: "", status: "not-created", updatedAt: null },
        jobsCount: 0
    });

    savePortalsToStorage();
    renderPortals();
    renderStats();
    showToast("Success", `Custom portal "${name}" has been added!`, "success");
}

function deletePortal(id) {
    const index = portals.findIndex(p => p.id === id);
    if (index === -1) return;
    const portalName = portals[index].name;
    if (confirm(`Are you sure you want to delete the career portal for "${portalName}"?`)) {
        portals.splice(index, 1);
        jobs = jobs.filter(j => j.portalId !== id);
        savePortalsToStorage();
        saveJobsToStorage();
        renderPortals();
        renderStats();
        showToast("Portal Deleted", `"${portalName}" has been removed.`, "danger");
    }
}

function saveAccountCredentials(id, username, status, notes) {
    const portal = portals.find(p => p.id === id);
    if (!portal) return;
    portal.account = { username, status, notes, updatedAt: new Date().toISOString() };
    savePortalsToStorage();
    renderPortals();
    renderStats();
    showToast("Vault Updated", `Credentials for ${portal.name} saved successfully.`, "success");
}

function getStatusIcon(status) {
    switch (status) {
        case "incomplete": return "fa-user-pen";
        case "complete": return "fa-user-check";
        case "applied": return "fa-paper-plane";
        default: return "fa-user-slash";
    }
}

// --- Toast ---
function showToast(title, message, type = "info") {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;

    let icon = "fa-circle-info";
    if (type === "success") icon = "fa-circle-check";
    if (type === "warning") icon = "fa-circle-exclamation";
    if (type === "danger") icon = "fa-trash-can";

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <div>
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-primary); margin-bottom: 0.1rem;">${title}</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.3;">${message}</div>
        </div>
        <button class="toast-close">&times;</button>`;

    toast.querySelector(".toast-close").addEventListener("click", (e) => {
        e.stopPropagation();
        dismissToast(toast);
    });
    toast.addEventListener("click", () => dismissToast(toast));

    container.appendChild(toast);
    setTimeout(() => dismissToast(toast), 6000);
}

function dismissToast(toast) {
    if (!toast.parentNode) return;
    toast.style.animation = "toast-slide-out 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards";
    setTimeout(() => { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 300);
}

// --- Event Listeners ---
function setupEventListeners() {
    document.getElementById("searchInput").addEventListener("input", renderPortals);
    document.getElementById("categoryFilter").addEventListener("change", renderPortals);
    document.getElementById("statusFilter").addEventListener("change", renderPortals);

    // Account Modal
    const accountModal = document.getElementById("accountModal");
    document.getElementById("closeAccountModalBtn").addEventListener("click", () => closeModal(accountModal));
    document.getElementById("cancelAccountBtn").addEventListener("click", () => closeModal(accountModal));

    document.getElementById("accountForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const pId = document.getElementById("accountPortalId").value;
        const email = document.getElementById("accountEmail").value;
        const status = document.getElementById("accountStatus").value;
        const notes = document.getElementById("accountNotes").value;
        saveAccountCredentials(pId, email, status, notes);
        closeModal(accountModal);
    });

    // Add Portal Modal
    const addPortalModal = document.getElementById("addPortalModal");
    document.getElementById("openAddPortalBtn").addEventListener("click", () => openModal(addPortalModal));
    document.getElementById("closeAddPortalModalBtn").addEventListener("click", () => closeModal(addPortalModal));
    document.getElementById("cancelAddPortalBtn").addEventListener("click", () => closeModal(addPortalModal));

    document.getElementById("addPortalForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("portalName").value;
        const url = document.getElementById("portalUrl").value;
        const category = document.getElementById("portalCategory").value;
        const initials = document.getElementById("portalInitials").value;
        addCustomPortal(name, url, category, initials);
        closeModal(addPortalModal);
        e.target.reset();
    });

    // Logout
    document.getElementById("logoutBtn").addEventListener("click", () => {
        localStorage.removeItem("careerhub_session");
        currentUser = null;
        showToast("Logged Out", "Secured your vault session.", "info");
        initApp();
    });

    // Auth
    const authToggleBtn = document.getElementById("authToggleBtn");
    const authSubmitBtn = document.getElementById("authSubmitBtn");
    const authTitle = document.querySelector("#authScreen h2");
    const authSubtitle = document.getElementById("authSubtitle");
    const authToggleText = document.getElementById("authToggleText");

    authToggleBtn.addEventListener("click", () => {
        isRegisterMode = !isRegisterMode;
        if (isRegisterMode) {
            authTitle.textContent = "Register Vault";
            authSubtitle.textContent = "Create an isolated profile to secure your career portals locally.";
            authSubmitBtn.textContent = "Create Account";
            authToggleText.textContent = "Already have a vault?";
            authToggleBtn.textContent = "Sign In";
        } else {
            authTitle.textContent = "CareerHub Dashboard";
            authSubtitle.textContent = "Monitor your watchlisted career portals & get personalized job alerts.";
            authSubmitBtn.textContent = "Sign In";
            authToggleText.textContent = "New to CareerHub?";
            authToggleBtn.textContent = "Create Account";
        }
    });

    document.getElementById("authForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("authUsername").value.trim();
        const password = document.getElementById("authPassword").value.trim();

        if (!username || !password) {
            showToast("Required Fields", "Please enter username and password.", "warning");
            return;
        }

        if (isRegisterMode) {
            const existing = localStorage.getItem(`careerhub_user_${username}`);
            if (existing) {
                showToast("Error", "Username is already taken.", "danger");
                return;
            }
            localStorage.setItem(`careerhub_user_${username}`, password);
            localStorage.setItem("careerhub_session", username);
            showToast("Account Created", `Welcome, ${username}! Hydrating 50 portals...`, "success");
            isRegisterMode = false;
            initApp();
        } else {
            const savedPassword = localStorage.getItem(`careerhub_user_${username}`);
            if (savedPassword === password) {
                localStorage.setItem("careerhub_session", username);
                showToast("Logged In", `Welcome back, ${username}!`, "success");
                initApp();
            } else {
                showToast("Auth Failed", "Invalid username or password.", "danger");
            }
        }
    });
}

function openModal(modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal(modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

function openAccountModal(portal) {
    const modal = document.getElementById("accountModal");
    document.getElementById("accountModalTitle").textContent = `Manage Account: ${portal.name}`;
    document.getElementById("accountPortalId").value = portal.id;
    document.getElementById("portalUrlDisplay").value = portal.url;
    document.getElementById("accountEmail").value = portal.account.username || "";
    document.getElementById("accountStatus").value = portal.account.status || "not-created";
    document.getElementById("accountNotes").value = portal.account.notes || "";
    openModal(modal);
}

document.addEventListener("DOMContentLoaded", initApp);