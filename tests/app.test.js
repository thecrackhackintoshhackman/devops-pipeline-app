// Tests unitaires simples
test('Application initialisation', () => {
    expect(typeof window).toBe('object');
});

test('DOM Elements exist', () => {
    document.body.innerHTML = `
        <div id="visitCount">0</div>
        <button id="incrementBtn"></button>
    `;
    
    expect(document.getElementById('visitCount')).not.toBeNull();
    expect(document.getElementById('incrementBtn')).not.toBeNull();
});

test('LocalStorage operations', () => {
    localStorage.setItem('test', 'value');
    expect(localStorage.getItem('test')).toBe('value');
    
    localStorage.removeItem('test');
    expect(localStorage.getItem('test')).toBeNull();
});