// Application JavaScript simple
document.addEventListener('DOMContentLoaded', function() {
    // Éléments DOM
    const demoBtn = document.getElementById('demoBtn');
    const incrementBtn = document.getElementById('incrementBtn');
    const visitCount = document.getElementById('visitCount');
    const buildVersion = document.getElementById('buildVersion');
    const buildDate = document.getElementById('buildDate');
    
    // Compteur de visites (stockage local)
    let count = localStorage.getItem('visitCount') || 0;
    visitCount.textContent = count;
    
    // Version et date de build
    buildVersion.textContent = '1.0.0';
    buildDate.textContent = new Date().toLocaleDateString('fr-FR');
    
    // Bouton de démo
    demoBtn.addEventListener('click', function() {
        alert('🎉 Pipeline CI/CD fonctionnel!\n\n✓ Tests automatisés\n✓ Build Docker\n✓ Déploiement continu\n✓ Monitoring');
        
        // Animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
    
    // Bouton d'incrémentation
    incrementBtn.addEventListener('click', function() {
        count++;
        visitCount.textContent = count;
        localStorage.setItem('visitCount', count);
        
        // Animation
        visitCount.style.transform = 'scale(1.2)';
        setTimeout(() => {
            visitCount.style.transform = 'scale(1)';
        }, 300);
        
        // Feedback
        this.innerHTML = '<i class="fas fa-check"></i> Incrémenté!';
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-plus"></i> Incrémenter';
        }, 1000);
    });
    
    // Simulation de chargement de données
    console.log('🚀 Application DevOps chargée avec succès');
    console.log('📊 Version:', buildVersion.textContent);
    console.log('📅 Build date:', buildDate.textContent);
});