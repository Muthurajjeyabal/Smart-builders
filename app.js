const INR = n => "₹" + Math.round(Number(n) || 0).toLocaleString("en-IN");
const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
const today = () => new Date().toISOString().slice(0, 10);

const MATERIALS = [
  "Cement", "Sand", "Steel", "Bricks/Blocks", "Wood",
  "Window", "Door", "Grill", "Plumbing",
  "Electrical", "Wire", "Paint", "Tiles",
  "Transport", "Machinery", "Miscellaneous"
];
const WORK_TYPES = ["Mason", "Helper", "Electrician", "Plumber", "Carpenter", "Painter", "Other"];
const PAY_MODES = ["Cash", "UPI", "Bank", "Cheque"];

function defaultSpecs() {
  return [
    { cat: "Civil / Structure", item: "Cement", val: "53 Grade — Ramco / Sankar" },
    { cat: "Civil / Structure", item: "Steel (TMT)", val: "Fe550 — Agni / Tata Tiscon" },
    { cat: "Civil / Structure", item: "Brick / Block", val: "Chamber brick / Fly ash block" },
    { cat: "Civil / Structure", item: "RCC mix", val: "M20 — as per drawing" },
    { cat: "Civil / Structure", item: "Sand", val: "M-sand + river sand mix" },
    { cat: "Doors", item: "Main door", val: "Teak wood / Steel security door" },
    { cat: "Doors", item: "Inner doors", val: "Flush door / Membrane" },
    { cat: "Doors", item: "Bathroom door", val: "PVC door" },
    { cat: "Doors", item: "Door lock", val: "Godrej / equivalent" },
    { cat: "Windows", item: "Windows", val: "Aluminium sliding / UPVC" },
    { cat: "Windows", item: "Grills", val: "MS square bar grill" },
    { cat: "Electrical", item: "Wire", val: "Finolex / Havells — 1.0, 1.5, 2.5, 4 sq.mm" },
    { cat: "Electrical", item: "Switches", val: "Anchor Roma / Legrand" },
    { cat: "Electrical", item: "DB + MCB", val: "Standard single phase DB" },
    { cat: "Electrical", item: "Fan / light points", val: "Hall, bed, kitchen — standard points" },
    { cat: "Plumbing", item: "Inner pipe", val: "CPVC — Ashirvad / Supreme" },
    { cat: "Plumbing", item: "Outer / drainage", val: "PVC 4 inch" },
    { cat: "Plumbing", item: "Taps / CP fittings", val: "Watertec / Jaguar equivalent" },
    { cat: "Plumbing", item: "Overhead tank", val: "1000 L PVC" },
    { cat: "Plumbing", item: "Sump", val: "As per site — RCC" },
    { cat: "Flooring", item: "Hall / Bedroom tiles", val: "Vitrified 2x2" },
    { cat: "Flooring", item: "Bathroom tiles", val: "Anti-skid + wall tiles 8 ft" },
    { cat: "Flooring", item: "Parking / sitout", val: "Parking tiles" },
    { cat: "Kitchen", item: "Kitchen slab", val: "Granite 20mm" },
    { cat: "Kitchen", item: "Sink", val: "SS single bowl" },
    { cat: "Sanitary", item: "WC / wash basin", val: "Parryware / Cera equivalent" },
    { cat: "Paint", item: "Inner paint", val: "2 coat putty + emulsion" },
    { cat: "Paint", item: "Outer paint", val: "Ace / Apex weather coat" },
    { cat: "Wood / Extra", item: "Loft / cupboard framing", val: "Sal wood / country wood" },
    { cat: "Wood / Extra", item: "Staircase railing", val: "SS / MS as selected" },
    { cat: "Wood / Extra", item: "Compound / gate", val: "Extra — quote separately" }
  ];
}

const DEFAULT_USERS = [
  { phone: "9876543210", pin: "1234", name: "Engineer Ravi", tenantId: "t_ravi" }
];

function seedTenant() {
  const p1 = "p_anna";
  const p2 = "p_vela";
  return {
    tenantId: "t_ravi",
    firmName: "Ravi Civil Works",
    ownerName: "Engineer Ravi",
    phone: "9876543210",
    address: "12, 2nd Street, Anna Nagar, Chennai",
    projects: [
      {
        id: p1, name: "3BHK House", location: "Anna Nagar",
        ownerName: "Karthik", ownerPhone: "9000000001",
        type: "own_sale",
        saleValue: 5000000, estimatedCost: 3200000, otherBudget: 300000,
        startDate: "2026-06-01", endDate: "2026-12-15", floors: 2, status: "running"
      },
      {
        id: p2, name: "4BHK House", location: "Velachery",
        ownerName: "Meena", ownerPhone: "9000000002",
        type: "contract",
        sqftRate: 2500, houseSqft: 1400, stairSqft: 80, stairHalf: true, sharedSqft: 40,
        saleValue: 3650000, estimatedCost: 2500000, otherBudget: 200000,
        startDate: "2026-07-10", endDate: "2027-01-30", floors: 2, status: "running"
      }
    ],
    ownerPayments: [
      { id: uid(), projectId: p1, date: "2026-06-05", amount: 700000, mode: "Bank", note: "Advance" },
      { id: uid(), projectId: p1, date: "2026-08-01", amount: 500000, mode: "UPI", note: "2nd stage" },
      { id: uid(), projectId: p2, date: "2026-07-12", amount: 500000, mode: "Bank", note: "Advance" },
      { id: uid(), projectId: p2, date: "2026-08-20", amount: 300000, mode: "Cash", note: "Progress" }
    ],
    expenses: [
      { id: uid(), projectId: p1, date: "2026-08-12", material: "Cement", supplier: "ABC Cement", qty: 50, unit: "bag", rate: 420, total: 21000, paid: 15000, balance: 6000, note: "" },
      { id: uid(), projectId: p1, date: "2026-08-18", material: "Steel", supplier: "SK Steels", qty: 1.2, unit: "ton", rate: 62000, total: 74400, paid: 74400, balance: 0, note: "" },
      { id: uid(), projectId: p1, date: "2026-08-25", material: "Sand", supplier: "River Sand Co", qty: 12, unit: "unit", rate: 4500, total: 54000, paid: 40000, balance: 14000, note: "" },
      { id: uid(), projectId: p2, date: "2026-08-15", material: "Cement", supplier: "ABC Cement", qty: 40, unit: "bag", rate: 420, total: 16800, paid: 10000, balance: 6800, note: "" },
      { id: uid(), projectId: p2, date: "2026-08-28", material: "Bricks/Blocks", supplier: "Anbu Blocks", qty: 2000, unit: "nos", rate: 8, total: 16000, paid: 16000, balance: 0, note: "" }
    ],
    supplierPays: [
      { id: uid(), projectId: p1, supplier: "ABC Cement", date: "2026-08-20", amount: 0, mode: "UPI", note: "sample" }
    ],
    workers: [
      { id: "w_ravi", projectId: p1, name: "Ravi Mason", type: "Mason", wageType: "weekly", wage: 8000 },
      { id: "w_kumar", projectId: p1, name: "Kumar", type: "Helper", wageType: "daily", wage: 800 },
      { id: "w_selva", projectId: p2, name: "Selvam", type: "Mason", wageType: "weekly", wage: 8500 }
    ],
    attendance: [
      { id: uid(), workerId: "w_ravi", projectId: p1, date: "2026-09-01", present: 1 },
      { id: uid(), workerId: "w_ravi", projectId: p1, date: "2026-09-02", present: 1 },
      { id: uid(), workerId: "w_kumar", projectId: p1, date: "2026-09-02", present: 1 }
    ],
    workerPays: [
      { id: uid(), workerId: "w_ravi", projectId: p1, date: "2026-08-30", amount: 2000, type: "advance", mode: "Cash", note: "Advance" }
    ],
    otherExpenses: [
      { id: uid(), projectId: p1, date: "2026-08-10", title: "Site rent / other", amount: 15000, paid: 15000 }
    ]
  };
}

let db = { users: DEFAULT_USERS, tenants: { t_ravi: seedTenant() } };
let session = null;
let currentProjectId = null;
let homeFilterId = "all";
let usingServer = false;

function currentTenant() {
  return db.tenants[session.tenantId];
}
function project(id) {
  return currentTenant().projects.find(p => p.id === (id || currentProjectId));
}
function typeLabel(p) {
  return p.type === "contract" ? "Contract" : "Own sale";
}
function valueLabel(p) {
  return p.type === "contract" ? "Estimate" : "Sale value";
}
function numVal(el) {
  if (!el) return 0;
  const n = parseFloat(String(el.value || "").replace(/,/g, "").trim());
  return Number.isFinite(n) ? n : 0;
}
function sqftCalc(p) {
  const rate = Number(p.sqftRate) || 0;
  const house = Number(p.houseSqft) || 0;
  const stair = Number(p.stairSqft) || 0;
  const stairHalf = !!p.stairHalf;
  const shared = Number(p.sharedSqft) || 0;
  const houseSqft = stairHalf ? house : house + stair;
  const houseAmt = houseSqft * rate;
  const stairAmt = stairHalf ? stair * rate * 0.5 : 0;
  const sharedAmt = shared * rate * 0.5;
  const billSqft = houseSqft + (stairHalf ? stair * 0.5 : 0) + shared * 0.5;
  const total = houseAmt + stairAmt + sharedAmt;
  return {
    rate, house, stair, stairHalf, shared,
    houseSqft, houseAmt, stairAmt, sharedAmt, billSqft, total
  };
}
function byProject(arr, pid) {
  return (arr || []).filter(x => x.projectId === (pid || currentProjectId));
}

function expenseBalance(e) {
  return Math.max(0, Number(e.total) - Number(e.paid));
}

function supplierLedger(pid) {
  const t = currentTenant();
  const map = {};
  byProject(t.expenses, pid).forEach(e => {
    const k = e.supplier || "Unknown";
    if (!map[k]) map[k] = { supplier: k, purchase: 0, paid: 0, balance: 0 };
    map[k].purchase += Number(e.total) || 0;
    map[k].paid += Number(e.paid) || 0;
  });
  t.supplierPays.filter(p => !pid || p.projectId === pid).forEach(p => {
    if (pid && p.projectId !== pid) return;
    const k = p.supplier;
    if (!map[k]) map[k] = { supplier: k, purchase: 0, paid: 0, balance: 0 };
    map[k].paid += Number(p.amount) || 0;
  });
  Object.values(map).forEach(s => { s.balance = Math.max(0, s.purchase - s.paid); });
  return Object.values(map).sort((a, b) => b.balance - a.balance);
}

function ymd(d) {
  const z = n => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
}
function weekStart(d) {
  const x = new Date(d + "T00:00:00");
  const day = x.getDay();
  const diff = day === 0 ? 6 : day - 1;
  x.setDate(x.getDate() - diff);
  return ymd(x);
}
function weekDates(ref) {
  const start = weekStart(ref || today());
  const mon = new Date(start + "T00:00:00");
  return Array.from({ length: 7 }, (_, i) => {
    const x = new Date(mon);
    x.setDate(mon.getDate() + i);
    return ymd(x);
  });
}

function workerSummary(w, pid) {
  const t = currentTenant();
  const att = t.attendance.filter(a => a.workerId === w.id && a.projectId === (pid || w.projectId) && a.present);
  const pays = t.workerPays.filter(p => p.workerId === w.id && p.projectId === (pid || w.projectId));
  const days = att.reduce((s, a) => s + Number(a.present || 1), 0);
  let earned = 0;
  if (w.wageType === "daily") earned = days * Number(w.wage);
  else {
    const weeks = new Set(att.map(a => weekStart(a.date)));
    earned = weeks.size * Number(w.wage);
  }
  const advance = pays.filter(p => p.type === "advance").reduce((s, p) => s + Number(p.amount), 0);
  const paid = pays.filter(p => p.type !== "advance").reduce((s, p) => s + Number(p.amount), 0);
  const payable = Math.max(0, earned - advance - paid);
  return { days, earned, advance, paid, payable };
}

function projectStats(pid) {
  const t = currentTenant();
  const p = t.projects.find(x => x.id === pid);
  const received = byProject(t.ownerPayments, pid).reduce((s, x) => s + Number(x.amount), 0);
  const ownerDue = Math.max(0, Number(p.saleValue) - received);
  const materialTotal = byProject(t.expenses, pid).reduce((s, x) => s + Number(x.total), 0);
  const materialPaid = byProject(t.expenses, pid).reduce((s, x) => s + Number(x.paid), 0);
  const extraSupplierPaid = t.supplierPays.filter(x => x.projectId === pid).reduce((s, x) => s + Number(x.amount), 0);
  const supplierPayable = supplierLedger(pid).reduce((s, x) => s + x.balance, 0);
  const otherTotal = byProject(t.otherExpenses, pid).reduce((s, x) => s + Number(x.amount), 0);
  const otherPaid = byProject(t.otherExpenses, pid).reduce((s, x) => s + Number(x.paid), 0);
  const workers = t.workers.filter(w => w.projectId === pid);
  let workerEarned = 0, workerPaidAll = 0, workerPayable = 0;
  workers.forEach(w => {
    const ws = workerSummary(w, pid);
    workerEarned += ws.earned;
    workerPaidAll += ws.advance + ws.paid;
    workerPayable += ws.payable;
  });
  const cashIn = received;
  const cashOut = materialPaid + extraSupplierPaid + workerPaidAll + otherPaid;
  const cashBal = cashIn - cashOut;
  const constructionCost = materialTotal + workerEarned + otherTotal;
  const profit = Number(p.saleValue) - constructionCost;
  return {
    received, ownerDue, materialTotal, materialPaid, supplierPayable,
    otherTotal, workerEarned, workerPaidAll, workerPayable,
    cashIn, cashOut, cashBal, constructionCost, profit, saleValue: Number(p.saleValue)
  };
}

function firmStats() {
  const t = currentTenant();
  const blank = {
    received: 0, ownerDue: 0, materialTotal: 0, cashOut: 0, cashBal: 0,
    supplierPayable: 0, workerPayable: 0, profit: 0, constructionCost: 0
  };
  return t.projects.reduce((acc, p) => {
    const s = projectStats(p.id);
    Object.keys(blank).forEach(k => acc[k] += s[k]);
    return acc;
  }, { ...blank });
}

async function persist() {
  localStorage.setItem("sitekanakku_db", JSON.stringify(db));
  if (!usingServer) return;
  try {
    await fetch("api.php?action=save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(db)
    });
  } catch (e) { /* offline ok */ }
}

async function loadDb() {
  try {
    const res = await fetch("api.php?action=load", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data && data.tenants) {
        db = data;
        usingServer = true;
        return;
      }
    }
  } catch (e) {}
  const raw = localStorage.getItem("sitekanakku_db");
  if (raw) {
    try { db = JSON.parse(raw); } catch (e) {}
  }
  if (!db.users) db.users = DEFAULT_USERS;
  if (!db.tenants || !db.tenants.t_ravi) db.tenants = { t_ravi: seedTenant() };
}

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.style.display = "block";
  setTimeout(() => { el.style.display = "none"; }, 2200);
}

function show(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  document.querySelectorAll(".nav button").forEach(b => {
    b.classList.toggle("active", b.dataset.page === id);
  });
  window.scrollTo(0, 0);
}

function openProject(id) {
  currentProjectId = id;
  renderProject();
  show("page-project");
}

function renderLogin() {
  document.getElementById("app-shell").classList.add("hidden");
  document.getElementById("login-shell").classList.remove("hidden");
}

function afterLogin() {
  document.getElementById("login-shell").classList.add("hidden");
  document.getElementById("app-shell").classList.remove("hidden");
  document.getElementById("firm-label").textContent = currentTenant().firmName;
  currentProjectId = currentTenant().projects[0]?.id || null;
  renderHome();
  show("page-home");
}

function selectHomeProject(id) {
  homeFilterId = id;
  if (id !== "all") currentProjectId = id;
  renderHome();
}

function renderHome() {
  const t = currentTenant();
  const selected = homeFilterId !== "all" ? t.projects.find(p => p.id === homeFilterId) : null;
  const s = selected ? projectStats(selected.id) : firmStats();
  document.getElementById("home-seg").innerHTML =
    `<button class="${homeFilterId === "all" ? "on" : ""}" onclick="selectHomeProject('all')">All</button>` +
    t.projects.map(p =>
      `<button class="${homeFilterId === p.id ? "on" : ""}" onclick="selectHomeProject('${p.id}')">${p.name}</button>`
    ).join("");
  document.getElementById("home-sub").textContent = selected
    ? `${selected.location} · ${selected.ownerName || ""}`
    : "";
  document.getElementById("home-kpis").innerHTML = `
    <div class="card"><div class="label">Received</div><div class="kpi blue">${INR(s.received)}</div>
      ${selected ? `<div class="tiny">Due ${INR(s.ownerDue)} · Sale ${INR(s.saleValue)}</div>` : `<div class="tiny">${t.projects.length} projects</div>`}</div>
    <div class="card"><div class="label">Cash balance</div><div class="kpi ${s.cashBal >= 0 ? "green" : "red"}">${INR(s.cashBal)}</div></div>
    <div class="card"><div class="label">Supplier due</div><div class="kpi gold">${INR(s.supplierPayable)}</div></div>
    <div class="card"><div class="label">Worker due</div><div class="kpi gold">${INR(s.workerPayable)}</div></div>
  `;
  document.getElementById("home-list-title").textContent = selected
    ? selected.name + " summary"
    : "Received by project";
  const list = selected ? [selected] : t.projects;
  document.getElementById("project-list").innerHTML = list.map(p => {
    const ps = projectStats(p.id);
    return `<div class="item click" onclick="openProject('${p.id}')">
      <div class="row"><strong>${p.name}</strong><span class="pill ${p.type === "contract" ? "due" : "ok"}">${typeLabel(p)}</span></div>
      <div class="tiny">${p.location} · ${p.ownerName || ""}</div>
      <div class="row" style="margin-top:10px"><span class="label">${valueLabel(p)}</span><span>${INR(ps.saleValue)}</span></div>
      <div class="row"><span class="label">Received</span><strong class="amount" style="color:var(--blue)">${INR(ps.received)}</strong></div>
      <div class="row"><span class="label">Owner due</span><span>${INR(ps.ownerDue)}</span></div>
      <div class="row"><span class="label">Cash</span><span>${INR(ps.cashBal)}</span></div>
      <div class="row"><span class="label">Supplier / Worker due</span><span>${INR(ps.supplierPayable)} / ${INR(ps.workerPayable)}</span></div>
      <div class="row"><span class="label">Profit</span><span>${INR(ps.profit)}</span></div>
    </div>`;
  }).join("") || `<div class="muted">No projects</div>`;
}

function renderProject() {
  const p = project();
  if (!p) return;
  const s = projectStats(p.id);
  document.getElementById("proj-title").textContent = p.name;
  document.getElementById("proj-sub").textContent = `${typeLabel(p)} · ${p.location} · ${p.ownerName || ""}`;
  const sq = p.type === "contract" ? sqftCalc(p) : null;
  let sqHtml = "";
  if (sq) {
    const houseLine = sq.stairHalf
      ? `House ${sq.house} sq.ft × ${INR(sq.rate)}`
      : `House ${sq.houseSqft} sq.ft (House + staircase) × ${INR(sq.rate)}`;
    sqHtml = `<div class="card" style="margin-bottom:10px">
      <div class="label">Estimate @ ${INR(sq.rate)} / sq.ft</div>
      <div class="row"><span>${houseLine}</span><span>${INR(sq.houseAmt)}</span></div>
      ${sq.stairHalf && sq.stair > 0 ? `<div class="row"><span>Staircase ${sq.stair} sq.ft × half</span><span>${INR(sq.stairAmt)}</span></div>` : ""}
      ${sq.shared > 0 ? `<div class="row"><span>Shared ${sq.shared} sq.ft × half</span><span>${INR(sq.sharedAmt)}</span></div>` : ""}
      <div class="row"><strong>Billable ${sq.billSqft} sq.ft</strong><strong>${INR(sq.total)}</strong></div>
    </div>`;
  }
  document.getElementById("proj-sqft").innerHTML = sqHtml;
  document.getElementById("proj-kpis").innerHTML = `
    <div class="card"><div class="label">Received</div><div class="kpi blue">${INR(s.received)}</div><div class="tiny">${valueLabel(p)} ${INR(s.saleValue)} · Due ${INR(s.ownerDue)}</div></div>
    <div class="card"><div class="label">Material cost</div><div class="kpi">${INR(s.materialTotal)}</div><div class="tiny">Due ${INR(s.supplierPayable)}</div></div>
    <div class="card"><div class="label">Labour</div><div class="kpi">${INR(s.workerEarned)}</div><div class="tiny">Due ${INR(s.workerPayable)}</div></div>
    <div class="card"><div class="label">Estimated profit</div><div class="kpi ${s.profit >= 0 ? "green" : "red"}">${INR(s.profit)}</div><div class="tiny">Sale ${INR(s.saleValue)}</div></div>
  `;
  document.getElementById("cash-table").innerHTML = `
    <tr><td>${p.type === "contract" ? "Customer paid" : "Sale / owner paid"}</td><td class="r">${INR(s.received)}</td></tr>
    <tr><td>Material Expenses (bill)</td><td class="r">${INR(s.materialTotal)}</td></tr>
    <tr><td>Worker Payments (earned)</td><td class="r">${INR(s.workerEarned)}</td></tr>
    <tr><td>Other Expenses</td><td class="r">${INR(s.otherTotal)}</td></tr>
    <tr><td>Cash out</td><td class="r">${INR(s.cashOut)}</td></tr>
    <tr><td><strong>Cash Balance</strong></td><td class="r"><strong>${INR(s.cashBal)}</strong></td></tr>
    <tr><td>Supplier Payable</td><td class="r">${INR(s.supplierPayable)}</td></tr>
    <tr><td>Worker Payable</td><td class="r">${INR(s.workerPayable)}</td></tr>
  `;
}

function renderExpense() {
  const t = currentTenant();
  const rows = [...byProject(t.expenses)].sort((a, b) => b.date.localeCompare(a.date));
  document.getElementById("exp-project").innerHTML = t.projects.map(p =>
    `<option value="${p.id}" ${p.id === currentProjectId ? "selected" : ""}>${p.name}</option>`).join("");
  const extra = t.extraMaterials || [];
  const used = (t.expenses || []).map(e => e.material).filter(Boolean);
  const mats = [...new Set([...MATERIALS, ...extra, ...used])];
  document.getElementById("mat-list").innerHTML = mats.map(m => `<option value="${m}"></option>`).join("");
  const labour = byProject(t.workerPays).map(p => {
    const w = t.workers.find(x => x.id === p.workerId);
    const kind = p.type === "advance" ? "Advance" : "Wage";
    return {
      date: p.date,
      title: "Labour · " + kind + " · " + (w ? w.name : ""),
      detail: p.note || kind,
      amount: Number(p.amount),
      labour: true
    };
  });
  const mixed = [
    ...rows.map(e => ({
      date: e.date,
      title: e.material,
      detail: (e.supplier || "") + " · " + e.qty + " × " + INR(e.rate),
      amount: Number(e.total),
      paid: Number(e.paid),
      bal: expenseBalance(e),
      labour: false
    })),
    ...labour
  ].sort((a, b) => String(b.date).localeCompare(String(a.date)));
  document.getElementById("exp-list").innerHTML = mixed.map(e => `
    <div class="item">
      <div class="row"><strong>${e.title}</strong><span class="amount">${INR(e.amount)}</span></div>
      <div class="tiny">${e.date} · ${e.detail}</div>
      ${e.labour
        ? `<span class="pill ok" style="margin-top:6px">Labour cash paid</span>`
        : `<div class="row" style="margin-top:6px">
            <span class="pill ok">Paid ${INR(e.paid)}</span>
            <span class="pill ${e.bal > 0 ? "due" : "ok"}">Bal ${INR(e.bal)}</span>
          </div>`}
    </div>`).join("") || `<div class="muted">No expenses</div>`;
}

function calcExpLine() {
  const qty = Number(document.getElementById("exp-qty").value) || 0;
  const rate = Number(document.getElementById("exp-rate").value) || 0;
  const total = qty * rate;
  const paid = Number(document.getElementById("exp-paid").value) || 0;
  document.getElementById("exp-total-view").textContent = INR(total);
  document.getElementById("exp-bal-view").textContent = INR(Math.max(0, total - paid));
}

function saveExpense() {
  const t = currentTenant();
  const qty = Number(document.getElementById("exp-qty").value) || 0;
  const rate = Number(document.getElementById("exp-rate").value) || 0;
  const total = qty * rate;
  const paid = Number(document.getElementById("exp-paid").value) || 0;
  const material = (document.getElementById("exp-material").value || "").trim();
  if (!material) { toast("Enter item name"); return; }
  if (!qty || !rate) { toast("Enter qty and rate"); return; }
  currentProjectId = document.getElementById("exp-project").value;
  if (!MATERIALS.includes(material)) {
    t.extraMaterials = t.extraMaterials || [];
    if (!t.extraMaterials.includes(material)) t.extraMaterials.push(material);
  }
  t.expenses.push({
    id: uid(),
    projectId: currentProjectId,
    date: document.getElementById("exp-date").value || today(),
    material,
    supplier: document.getElementById("exp-supplier").value.trim() || "Unknown",
    qty, unit: document.getElementById("exp-unit").value || "unit",
    rate, total, paid, balance: Math.max(0, total - paid),
    note: document.getElementById("exp-note").value.trim()
  });
  persist();
  document.getElementById("exp-qty").value = "";
  document.getElementById("exp-rate").value = "";
  document.getElementById("exp-paid").value = "";
  document.getElementById("exp-note").value = "";
  toast("Expense saved");
  renderExpense();
}

function renderMoney() {
  const t = currentTenant();
  const pid = currentProjectId;
  document.getElementById("pay-project").innerHTML = t.projects.map(p =>
    `<option value="${p.id}" ${p.id === pid ? "selected" : ""}>${p.name}</option>`).join("");
  const pays = [...byProject(t.ownerPayments, pid)].sort((a, b) => b.date.localeCompare(a.date));
  const p = project(pid);
  const rec = pays.reduce((s, x) => s + Number(x.amount), 0);
  document.getElementById("owner-summary").innerHTML = p ? `
    <div class="tiny">${typeLabel(p)}</div>
    <div class="row"><span>${valueLabel(p)}</span><strong>${INR(p.saleValue)}</strong></div>
    <div class="row"><span>Received</span><strong class="ok-text">${INR(rec)}</strong></div>
    <div class="row"><span>Due Due</span><strong>${INR(Math.max(0, p.saleValue - rec))}</strong></div>
  ` : "";
  document.getElementById("owner-list").innerHTML = pays.map(x => `
    <div class="item"><div class="row"><strong>${INR(x.amount)}</strong><span class="pill">${x.mode}</span></div>
    <div class="tiny">${x.date} · ${x.note || ""}</div></div>`).join("") || `<div class="muted">No payments</div>`;
  renderSuppliers(pid);
}
function renderSuppliers(pid) {
  const box = document.getElementById("supplier-list");
  if (!box) return;
  const suppliers = supplierLedger(pid);
  box.innerHTML = suppliers.map(s => `
    <div class="item">
      <div class="row"><strong>${s.supplier}</strong><span class="pill ${s.balance ? "due" : "ok"}">${INR(s.balance)}</span></div>
      <div class="tiny">Purchase ${INR(s.purchase)} · Paid ${INR(s.paid)}</div>
      ${s.balance ? `<button class="btn btn-ghost" style="margin-top:8px" onclick="paySupplier('${encodeURIComponent(s.supplier)}')">Pay due</button>` : ""}
    </div>`).join("") || `<div class="muted">No suppliers</div>`;
}

function saveOwnerPay() {
  const t = currentTenant();
  const amount = Number(document.getElementById("own-amt").value) || 0;
  if (!amount) { toast("Enter amount"); return; }
  currentProjectId = document.getElementById("pay-project").value;
  t.ownerPayments.push({
    id: uid(), projectId: currentProjectId,
    date: document.getElementById("own-date").value || today(),
    amount, mode: document.getElementById("own-mode").value,
    note: document.getElementById("own-note").value.trim()
  });
  persist();
  document.getElementById("own-amt").value = "";
  toast("Payment saved");
  renderMoney();
}

function renderPeople() {
  const t = currentTenant();
  const pid = currentProjectId;
  document.getElementById("people-project").innerHTML = t.projects.map(p =>
    `<option value="${p.id}" ${p.id === pid ? "selected" : ""}>${p.name}</option>`).join("");
  const workers = t.workers.filter(w => w.projectId === pid);
  const days = weekDates(today());
  const names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const todayHere = workers.filter(w =>
    t.attendance.find(a => a.workerId === w.id && a.projectId === pid && a.date === today() && Number(a.present) > 0)
  ).map(w => w.name);
  const todayBanner = `<div class="item">
    <div class="label">Present today (${todayHere.length}/${workers.length})</div>
    <div style="font-weight:700;margin-top:4px">${todayHere.length ? todayHere.join(", ") : "Nobody marked"}</div>
    
  </div>`;
  document.getElementById("worker-list").innerHTML = todayBanner + (workers.map(w => {
    const s = workerSummary(w, pid);
    const todayRec = t.attendance.find(a => a.workerId === w.id && a.projectId === pid && a.date === today());
    const todayVal = todayRec ? Number(todayRec.present) : 0;
    const todayTxt = todayVal >= 1 ? "Present" : todayVal > 0 ? "Half" : "Off";
    const todayCls = todayVal >= 1 ? "yes" : todayVal > 0 ? "half" : "no";
    const open = openWorkerId === w.id;
    let extra = "";
    if (open) {
      const weekHtml = days.map((dt, i) => {
        const rec = t.attendance.find(a => a.workerId === w.id && a.projectId === pid && a.date === dt);
        const val = rec ? Number(rec.present) : 0;
        const tag = val >= 1 ? "Present" : val > 0 ? "Half day" : "Off";
        const cls = val >= 1 ? "yes" : val > 0 ? "half" : "no";
        const lab = dt === today() ? " · today" : (i === 5 ? " · payday" : "");
        return `<div class="att-row" onclick="toggleAttend('${w.id}','${dt}')">
          <span>${names[i]}${lab}</span>
          <span class="att-tag ${cls}">${tag}</span>
        </div>`;
      }).join("");
      extra = `<div class="grid grid-2" style="margin:8px 0">
        <div><div class="label">Earned</div><div class="amount">${INR(s.earned)}</div></div>
        <div><div class="label">Advance</div><div class="amount">${INR(s.advance)}</div></div>
        <div><div class="label">Paid</div><div class="amount">${INR(s.paid)}</div></div>
        <div><div class="label">Due</div><div class="amount" style="color:${s.payable ? "#fda4af" : "#7dd3c0"}">${INR(s.payable)}</div></div>
      </div>
      ${weekHtml}
      <div class="btn-row" style="margin-top:8px">
        <button class="btn btn-ghost" onclick="payWorker('${w.id}','advance')">Advance</button>
        <button class="btn btn-primary" onclick="payWorker('${w.id}','salary')">Pay wage ${INR(s.payable)}</button>
      </div>`;
    }
    return `<div class="item">
      <div class="row">
        <div onclick="openWorker('${w.id}')" style="flex:1;cursor:pointer">
          <strong>${w.name}</strong>
          <div class="tiny">${w.type} · Due ${INR(s.payable)}</div>
        </div>
        <span class="att-tag ${todayCls}" onclick="toggleAttend('${w.id}','${today()}')">${todayTxt}</span>
      </div>
      ${extra}
    </div>`;
  }).join("") || `<div class="muted">No workers</div>`);
}
function openWorker(id) {
  openWorkerId = openWorkerId === id ? "" : id;
  renderPeople();
}

function markPresent(workerId) {
  toggleAttend(workerId, today());
}
function toggleAttend(workerId, date) {
  const t = currentTenant();
  const rec = t.attendance.find(a => a.workerId === workerId && a.date === date && a.projectId === currentProjectId);
  if (!rec) {
    t.attendance.push({ id: uid(), workerId, projectId: currentProjectId, date, present: 1 });
    toast("Present");
  } else if (Number(rec.present) >= 1) {
    rec.present = 0.5;
    toast("Half day");
  } else {
    t.attendance = t.attendance.filter(a => a.id !== rec.id);
    toast("Off");
  }
  persist();
  renderPeople();
}

function payWorker(workerId, type) {
  const t = currentTenant();
  const w = t.workers.find(x => x.id === workerId);
  if (!w) return;
  const s = workerSummary(w, currentProjectId);
  let amt = 0;
  let note = "";
  if (type === "advance") {
    amt = Number(prompt(w.name + " — advance amount?", "1000"));
    if (!amt) return;
    note = "Advance";
  } else {
    if (!s.payable) { toast(w.name + " — nothing due"); return; }
    const msg = w.name + " — Saturday wage\n\n"
      + "Earned: " + INR(s.earned) + "\n"
      + "Less advance: − " + INR(s.advance) + "\n"
      + "Already paid: − " + INR(s.paid) + "\n"
      + "Pay now: " + INR(s.payable);
    if (!confirm(msg)) return;
    amt = s.payable;
    note = "Saturday wage after advance";
  }
  t.workerPays.push({
    id: uid(), workerId, projectId: currentProjectId, date: today(), amount: amt, type, mode: "Cash", note
  });
  persist();
  toast(type === "advance" ? "Advance saved" : w.name + " — " + INR(amt) + " paid");
  renderPeople();
}

function paySupplier(nameEnc) {
  const name = decodeURIComponent(nameEnc);
  const amt = Number(prompt(name + " — pay amount?", "1000"));
  if (!amt) return;
  currentTenant().supplierPays.push({
    id: uid(), projectId: currentProjectId, supplier: name, date: today(), amount: amt, mode: "UPI", note: ""
  });
  persist(); toast("Supplier payment save"); renderMoney(); renderPeople();
}

function addWorker() {
  const name = document.getElementById("nw-name").value.trim();
  const wage = Number(document.getElementById("nw-wage").value) || 0;
  if (!name || !wage) { toast("Enter name and wage"); return; }
  currentTenant().workers.push({
    id: uid(),
    projectId: document.getElementById("people-project").value,
    name,
    type: document.getElementById("nw-type").value,
    wageType: document.getElementById("nw-wtype").value,
    wage
  });
  persist();
  document.getElementById("nw-name").value = "";
  document.getElementById("nw-wage").value = "";
  toast("Worker added");
  renderPeople();
}

function renderMore() {
  const t = currentTenant();
  document.getElementById("more-projects").innerHTML = t.projects.map(p => {
    const s = projectStats(p.id);
    return `<div class="item">
      <strong>${p.name}</strong>
      <div class="tiny">${typeLabel(p)} · ${p.location} · ${valueLabel(p)} ${INR(p.saleValue)}</div>
      <div class="tiny">Cost so far ${INR(s.constructionCost)} · Profit ${INR(s.profit)}</div>
    </div>`;
  }).join("");
  document.getElementById("sync-mode").textContent = usingServer
    ? "Server save ON"
    : "";
  calcSqft();
}

let npType = "contract";
let openWorkerId = "";
function setNpType(type) {
  npType = type;
  document.getElementById("np-type-contract").classList.toggle("on", type === "contract");
  document.getElementById("np-type-own").classList.toggle("on", type === "own_sale");
  document.getElementById("np-contract-box").classList.toggle("hidden", type !== "contract");
  document.getElementById("np-own-box").classList.toggle("hidden", type !== "own_sale");
  const estWrap = document.getElementById("np-est-wrap");
  if (estWrap) estWrap.classList.toggle("hidden", type === "contract");
  document.getElementById("np-owner-label").textContent = type === "contract" ? "Customer name" : "Buyer / owner name";
  calcSqft();
}
function calcSqft() {
  const modeEl = document.getElementById("np-stair-mode");
  const draft = {
    sqftRate: numVal(document.getElementById("np-rate")),
    houseSqft: numVal(document.getElementById("np-house")),
    stairSqft: numVal(document.getElementById("np-stair")),
    stairHalf: modeEl ? modeEl.value === "half" : true,
    sharedSqft: numVal(document.getElementById("np-shared"))
  };
  const s = sqftCalc(draft);
  const view = document.getElementById("np-sqft-view");
  if (view) {
    const houseLine = s.stairHalf
      ? `House ${s.house} sq.ft × ${INR(s.rate)}`
      : `House ${s.houseSqft} sq.ft (House + staircase) × ${INR(s.rate)}`;
    let html = `<div class="row"><span>${houseLine}</span><span>${INR(s.houseAmt)}</span></div>`;
    if (s.stairHalf && s.stair > 0) {
      html += `<div class="row"><span>Staircase ${s.stair} sq.ft × half ${INR(s.rate / 2)}</span><span>${INR(s.stairAmt)}</span></div>`;
    }
    if (s.shared > 0) {
      html += `<div class="row"><span>Shared ${s.shared} sq.ft × half ${INR(s.rate / 2)}</span><span>${INR(s.sharedAmt)}</span></div>`;
    }
    html += `<div class="row"><span>Billable sq.ft</span><strong id="np-bill-sqft">${s.billSqft.toLocaleString("en-IN")}</strong></div>`;
    html += `<div class="row"><span>Estimate</span><strong id="np-contract-amt" class="kpi blue">${INR(s.total)}</strong></div>`;
    view.innerHTML = html;
  }
  return s;
}
function addProject() {
  const name = document.getElementById("np-name").value.trim();
  if (!name) { toast("Enter project name"); return; }
  const p = {
    id: uid(), name,
    location: document.getElementById("np-loc").value.trim(),
    ownerName: document.getElementById("np-owner").value.trim(),
    ownerPhone: "",
    type: npType,
    estimatedCost: Number(document.getElementById("np-est").value) || 0,
    otherBudget: 0, startDate: today(), endDate: "",
    floors: Number(document.getElementById("np-floors").value) || 1,
    status: "running",
    saleValue: 0
  };
  if (npType === "contract") {
    const s = calcSqft();
    if (!s.rate || !s.houseSqft) { toast("Enter rate and house sq.ft"); return; }
    p.sqftRate = s.rate;
    p.houseSqft = s.house;
    p.stairSqft = s.stair;
    p.stairHalf = s.stairHalf;
    p.sharedSqft = s.shared;
    p.saleValue = s.total;
    p.estimatedCost = s.total;
  } else {
    p.saleValue = Number(document.getElementById("np-sale").value) || 0;
  }
  currentTenant().projects.push(p);
  persist();
  ["np-name", "np-loc", "np-owner", "np-sale", "np-est", "np-rate", "np-house", "np-stair", "np-shared"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  calcSqft();
  toast(npType === "contract" ? "Contract project added" : "Sale project added");
  renderHome(); renderMore();
}

function exportJson() {
  const blob = new Blob([JSON.stringify(currentTenant(), null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "sitekanakku-backup.json";
  a.click();
}

function exportCsv() {
  const t = currentTenant();
  const lines = ["date,project,type,detail,qty,rate,total,paid,balance"];
  t.expenses.forEach(e => {
    const p = t.projects.find(x => x.id === e.projectId);
    lines.push([e.date, p?.name, "expense", e.material + " / " + e.supplier, e.qty, e.rate, e.total, e.paid, expenseBalance(e)].join(","));
  });
  t.ownerPayments.forEach(e => {
    const p = t.projects.find(x => x.id === e.projectId);
    lines.push([e.date, p?.name, "owner", e.note || "payment", "", "", e.amount, e.amount, 0].join(","));
  });
  const blob = new Blob([lines.join("\n")], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "sitekanakku-report.csv";
  a.click();
}

function resetDemo() {
  if (!confirm("Reset demo data on this device?")) return;
  db.tenants[session.tenantId] = seedTenant();
  persist();
  renderHome(); renderMore();
  toast("Demo reset");
}

function getSpecs() {
  const t = currentTenant();
  if (!t.specs || !t.specs.length) t.specs = defaultSpecs();
  return t.specs;
}
function renderSpecEditor() {
  const box = document.getElementById("spec-editor");
  if (!box) return;
  const specs = getSpecs();
  let last = "";
  box.innerHTML = specs.map((s, i) => {
    const head = s.cat !== last ? `<div class="label" style="margin:10px 0 4px">${s.cat}</div>` : "";
    last = s.cat;
    return `${head}<div class="item" style="padding:8px">
      <div class="row"><strong>${s.item}</strong>
        <button class="chip" onclick="removeSpec(${i})">×</button></div>
      <input data-spec="${i}" value="${String(s.val).replace(/"/g, "&quot;")}" />
    </div>`;
  }).join("");
  box.querySelectorAll("input[data-spec]").forEach(inp => {
    inp.addEventListener("input", () => {
      const i = Number(inp.getAttribute("data-spec"));
      getSpecs()[i].val = inp.value;
      persist();
      renderQuotePreview();
    });
  });
}
function addSpecLine() {
  const item = (document.getElementById("spec-new-item").value || "").trim();
  const val = (document.getElementById("spec-new-val").value || "").trim();
  if (!item) { toast("Enter item name"); return; }
  getSpecs().push({ cat: "Extra", item, val: val || "-" });
  document.getElementById("spec-new-item").value = "";
  document.getElementById("spec-new-val").value = "";
  persist();
  renderSpecEditor();
  renderQuotePreview();
}
function removeSpec(i) {
  getSpecs().splice(i, 1);
  persist();
  renderSpecEditor();
  renderQuotePreview();
}
function specWhatsAppBlock() {
  const specs = getSpecs();
  const lines = ["", "*SPECIFICATION*", "────────────────"];
  let last = "";
  specs.forEach(s => {
    if (s.cat !== last) {
      lines.push("");
      lines.push("*" + s.cat + "*");
      last = s.cat;
    }
    lines.push("• " + s.item + ": " + s.val);
  });
  return lines.join("\n");
}
function quoteDraft() {
  return {
    sqftRate: numVal(document.getElementById("q-rate")),
    houseSqft: numVal(document.getElementById("q-house")),
    stairSqft: numVal(document.getElementById("q-stair")),
    stairHalf: (document.getElementById("q-stair-mode") || {}).value === "half",
    sharedSqft: numVal(document.getElementById("q-shared"))
  };
}
function quoteText() {
  const t = currentTenant();
  const s = sqftCalc(quoteDraft());
  const cust = (document.getElementById("q-cust").value || "").trim() || "Customer";
  const site = (document.getElementById("q-site").value || "").trim() || "-";
  const firm = (document.getElementById("q-firm").value || t.firmName || "").trim();
  const phone = (document.getElementById("q-builder-phone").value || t.phone || "").trim();
  const addr = (document.getElementById("q-builder-addr").value || t.address || "").trim();
  const lines = [];
  lines.push("🏗️ *CONSTRUCTION QUOTATION*");
  lines.push("────────────────");
  lines.push("*" + firm + "*");
  if (t.ownerName) lines.push(t.ownerName);
  if (phone) lines.push("📞 " + phone);
  if (addr) lines.push("📍 " + addr);
  lines.push("────────────────");
  lines.push("To: *" + cust + "*");
  lines.push("Site: " + site);
  lines.push("");
  if (s.stairHalf) {
    lines.push("House: " + s.house + " sq.ft × " + INR(s.rate) + " = " + INR(s.houseAmt));
    if (s.stair > 0) lines.push("Staircase (half): " + s.stair + " sq.ft × " + INR(s.rate / 2) + " = " + INR(s.stairAmt));
  } else {
    lines.push("House + staircase: " + s.houseSqft + " sq.ft × " + INR(s.rate) + " = " + INR(s.houseAmt));
  }
  if (s.shared > 0) lines.push("Shared (half): " + s.shared + " sq.ft × " + INR(s.rate / 2) + " = " + INR(s.sharedAmt));
  lines.push("Billable: *" + s.billSqft.toLocaleString("en-IN") + " sq.ft*");
  lines.push("────────────────");
  lines.push("*Estimate: " + INR(s.total) + "*");
  lines.push(specWhatsAppBlock());
  lines.push("");
  lines.push("Above specification is included in this rate.");
  lines.push("Compound, extra loft, extra points — extra.");
  lines.push("Quote valid for 15 days.");
  lines.push("Thank you.");
  return { s, cust, site, firm, phone, addr, text: lines.join("\n") };
}
function renderQuotePreview() {
  const q = quoteText();
  const el = document.getElementById("quote-preview");
  if (!el) return q;
  const s = q.s;
  let body = "";
  if (s.stairHalf) {
    body += `<div class="row"><span>House ${s.house} sq.ft × ${INR(s.rate)}</span><span>${INR(s.houseAmt)}</span></div>`;
    if (s.stair > 0) body += `<div class="row"><span>Staircase half ${s.stair} sq.ft</span><span>${INR(s.stairAmt)}</span></div>`;
  } else {
    body += `<div class="row"><span>House + staircase ${s.houseSqft} sq.ft × ${INR(s.rate)}</span><span>${INR(s.houseAmt)}</span></div>`;
  }
  if (s.shared > 0) body += `<div class="row"><span>Shared half ${s.shared} sq.ft</span><span>${INR(s.sharedAmt)}</span></div>`;
  el.innerHTML = `
    <div class="tiny">QUOTATION</div>
    <h3>${q.firm || "Builder"}</h3>
    <div class="q-firm">${q.phone ? "📞 " + q.phone : ""} ${q.addr ? "<br>📍 " + q.addr : ""}</div>
    <div class="q-line"></div>
    <div class="row"><span>To</span><strong>${q.cust}</strong></div>
    <div class="row"><span>Site</span><span>${q.site}</span></div>
    <div class="q-line"></div>
    ${body}
    <div class="row"><span>Billable</span><strong>${s.billSqft.toLocaleString("en-IN")} sq.ft</strong></div>
    <div class="q-line"></div>
    <div class="row"><span>Estimate</span><strong>${INR(s.total)}</strong></div>
    <div class="q-line"></div>
    <div class="tiny">Specification included in this rate</div>
    ${getSpecs().map(sp => `<div class="row"><span>${sp.item}</span><span>${sp.val}</span></div>`).join("")}
    <div class="tiny" style="margin-top:8px">Valid 15 days</div>`;
  return q;
}
function openQuote() {
  const t = currentTenant();
  document.getElementById("q-firm").value = t.firmName || "";
  document.getElementById("q-builder-phone").value = t.phone || "";
  document.getElementById("q-builder-addr").value = t.address || "";
  renderSpecEditor();
  renderQuotePreview();
  show("page-quote");
}
function saveBuilder() {
  const t = currentTenant();
  t.firmName = document.getElementById("q-firm").value.trim() || t.firmName;
  t.phone = document.getElementById("q-builder-phone").value.trim() || t.phone;
  t.address = document.getElementById("q-builder-addr").value.trim();
  document.getElementById("firm-label").textContent = t.firmName;
  persist();
  renderQuotePreview();
  toast("Builder saved");
}
function sendQuoteWA() {
  const q = renderQuotePreview();
  if (!q.s.total) { toast("Enter rate and sq.ft"); return; }
  saveBuilder();
  let phone = (document.getElementById("q-cust-phone").value || "").replace(/\D/g, "");
  if (phone.length === 10) phone = "91" + phone;
  const url = (phone.length >= 12 ? "https://wa.me/" + phone : "https://wa.me/") +
    "?text=" + encodeURIComponent(q.text);
  window.open(url, "_blank");
}
function quoteToProject() {
  const q = renderQuotePreview();
  if (!q.s.total) { toast("Enter estimate first"); return; }
  const t = currentTenant();
  t.projects.push({
    id: uid(),
    name: q.site !== "-" ? q.site : q.cust,
    location: q.site,
    ownerName: q.cust,
    ownerPhone: document.getElementById("q-cust-phone").value.trim(),
    type: "contract",
    sqftRate: q.s.rate,
    houseSqft: q.s.house,
    stairSqft: q.s.stair,
    stairHalf: q.s.stairHalf,
    sharedSqft: q.s.shared,
    saleValue: q.s.total,
    estimatedCost: q.s.total,
    otherBudget: 0,
    startDate: today(),
    endDate: "",
    floors: 2,
    status: "running"
  });
  persist();
  toast("Project created from quote");
  renderHome();
  show("page-home");
}
function logout() {
  session = null;
  renderLogin();
}

function bindNav() {
  document.querySelectorAll(".nav button").forEach(b => {
    b.onclick = () => {
      if (b.dataset.page === "page-expense") renderExpense();
      if (b.dataset.page === "page-money") renderMoney();
      if (b.dataset.page === "page-people") renderPeople();
      if (b.dataset.page === "page-more") renderMore();
      if (b.dataset.page === "page-home") renderHome();
      if (b.dataset.page === "page-quote") openQuote();
      show(b.dataset.page);
    };
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadDb();
  bindNav();
  document.getElementById("exp-date").value = today();
  document.getElementById("own-date").value = today();
  document.getElementById("exp-qty").addEventListener("input", calcExpLine);
  document.getElementById("exp-rate").addEventListener("input", calcExpLine);
  document.getElementById("exp-paid").addEventListener("input", calcExpLine);
  document.getElementById("exp-project").addEventListener("change", e => {
    currentProjectId = e.target.value; renderExpense();
  });
  document.getElementById("pay-project").addEventListener("change", e => {
    currentProjectId = e.target.value; renderMoney();
  });
  document.getElementById("people-project").addEventListener("change", e => {
    currentProjectId = e.target.value; renderPeople();
  });
  document.addEventListener("input", e => {
    if (e.target && ["np-rate", "np-house", "np-stair", "np-shared"].includes(e.target.id)) calcSqft();
    if (e.target && ["q-rate", "q-house", "q-stair", "q-shared", "q-cust", "q-site", "q-firm", "q-builder-phone", "q-builder-addr"].includes(e.target.id)) renderQuotePreview();
  });
  document.addEventListener("change", e => {
    if (e.target && ["np-rate", "np-house", "np-stair", "np-shared", "np-stair-mode"].includes(e.target.id)) calcSqft();
    if (e.target && e.target.id === "q-stair-mode") renderQuotePreview();
  });
  document.addEventListener("keyup", e => {
    if (e.target && ["np-rate", "np-house", "np-stair", "np-shared"].includes(e.target.id)) calcSqft();
    if (e.target && String(e.target.id || "").startsWith("q-")) renderQuotePreview();
  });
  document.getElementById("login-form").onsubmit = e => {
    e.preventDefault();
    const phone = document.getElementById("login-phone").value.trim();
    const pin = document.getElementById("login-pin").value.trim();
    const user = db.users.find(u => u.phone === phone && u.pin === pin);
    if (!user) { toast("Wrong phone / PIN. Demo: 9876543210 / 1234"); return; }
    session = user;
    afterLogin();
  };
  renderLogin();
});
