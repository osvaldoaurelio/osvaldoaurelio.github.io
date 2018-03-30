var secV, secM, secL, secI, secS;
const 
    $V = () => {
        V.classList.add('btn-active');
        secV.style.display = 'block';
        M.classList.remove('btn-active');
        secM.style.display = 'none';
        L.classList.remove('btn-active');
        secL.style.display = 'none';
        I.classList.remove('btn-active');
        secI.style.display = 'none';
        S.classList.remove('btn-active');
        secS.style.display = 'none';
    }, 
    $M = () => {
        V.classList.remove('btn-active');
        secV.style.display = 'none';
        M.classList.add('btn-active');
        secM.style.display = 'block';
        L.classList.remove('btn-active');
        secL.style.display = 'none';
        I.classList.remove('btn-active');
        secI.style.display = 'none';
        S.classList.remove('btn-active');
        secS.style.display = 'none';        
    }, 
    $L = () => {
        V.classList.remove('btn-active');
        secV.style.display = 'none';
        M.classList.remove('btn-active');
        secM.style.display = 'none';
        L.classList.add('btn-active');
        secL.style.display = 'block';
        I.classList.remove('btn-active');
        secI.style.display = 'none';
        S.classList.remove('btn-active');
        secS.style.display = 'none';
    }, 
    $I = () => {
        V.classList.remove('btn-active');
        secV.style.display = 'none';
        M.classList.remove('btn-active');
        secM.style.display = 'none';
        L.classList.remove('btn-active');
        secL.style.display = 'none';
        I.classList.add('btn-active');
        secI.style.display = 'block';
        S.classList.remove('btn-active');
        secS.style.display = 'none';
    }, 
    $S = () => {
        V.classList.remove('btn-active');
        secV.style.display = 'none';
        M.classList.remove('btn-active');
        secM.style.display = 'none';
        L.classList.remove('btn-active');
        secL.style.display = 'none';
        I.classList.remove('btn-active');
        secI.style.display = 'none';
        S.classList.add('btn-active');
        secS.style.display = 'block';
    };
const load = () => {
    const 
        V = document.getElementById('V'),
        M = document.getElementById('M'),
        L = document.getElementById('L'),
        I = document.getElementById('I'),
        S = document.getElementById('S');    
        secV = document.getElementById('sec-v');
        secM = document.getElementById('sec-m');
        secL = document.getElementById('sec-l');
        secI = document.getElementById('sec-i');
        secS = document.getElementById('sec-s');        
    V.addEventListener('click', $V, false);
    M.addEventListener('click', $M, false);
    L.addEventListener('click', $L, false);
    I.addEventListener('click', $I, false);
    S.addEventListener('click', $S, false);
}
document.addEventListener('DOMContentLoaded', load, false);
// chama a porra toda apos carregar os conteudos do DOM