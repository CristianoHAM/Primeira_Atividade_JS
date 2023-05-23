var vetor = [];
for (let index = 0; index < 10; index++) {
    
    vetor[index] = Number(prompt(`infome o ${index +1}º valor:`));
}
Number(vetor.sort());
vetor.sort();

document.write(vetor);