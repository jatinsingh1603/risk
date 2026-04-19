// storage.js

const Storage = {
  saveAudit(audit) {
    const all = this.getAllAudits();
    const existing = all.findIndex(a => a.domain === audit.domain);
    if (existing >= 0) all[existing] = audit;
    else all.push(audit);
    localStorage.setItem('swiftsane_audits', JSON.stringify(all));
  },
  
  getAllAudits() {
    return JSON.parse(localStorage.getItem('swiftsane_audits') || '[]');
  },
  
  getAuditByDomain(domain) {
    return this.getAllAudits().find(a => a.domain === domain) || null;
  },
  
  deleteAudit(domain) {
    const filtered = this.getAllAudits().filter(a => a.domain !== domain);
    localStorage.setItem('swiftsane_audits', JSON.stringify(filtered));
  }
};
