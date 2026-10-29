const b=require('./builder.js'),a=require('assert');
for(const p of 'hdwmy')a.equal(b({q:'teste x',period:p}),'https://www.google.com/search?q=teste%20x&tbs=qdr%3A'+p);
a.equal(b({q:'a',period:'m',sort:1,tab:'nws'}),'https://www.google.com/search?q=a&tbm=nws&tbs=qdr%3Am%2Csbd%3A1');
a.equal(b({q:'a',period:'custom',from:'2026-01-05',to:'2026-02-10',tab:'vid'}),'https://www.google.com/search?q=a%20after%3A2026-01-05%20before%3A2026-02-10&tbm=vid&tbs=cdr%3A1%2Ccd_min%3A01%2F05%2F2026%2Ccd_max%3A02%2F10%2F2026');
a.ok(b({q:'a',period:'d',tab:'isch'}).includes('tbm=isch'));console.log('OK')
