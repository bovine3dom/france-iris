dt.objects()[1]
dt.objects()[1].index.slice(0,5)

BigInt("0x"+dt.objects()[1].index)

BigInt("0x"+dt.objects()[1].index).toString(16)

new Set(h3.cellToChildren(h3.latLngToCell(51,0,1),9).map(x=>x.slice(0,5))) // get all the files we need to grab

aq.loadArrow(`/data/JRC_POPULATION_2018_H3_by_rnd/res=9/index_rnd=89196/part0.arrow`).then(d2 => {window.d3 = d2})
Promise.all(["89196", "89194"].map(i => aq.loadArrow(`/data/JRC_POPULATION_2018_H3_by_rnd/res=9/index_rnd=${i}/part0.arrow`))).then(a => a.reduce((l,r) => l.concat(r)))
[d2, d3].reduce((l,r) => l.concat(r))
