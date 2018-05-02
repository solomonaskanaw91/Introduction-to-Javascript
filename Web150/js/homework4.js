var entry;
    do {
entry = prompt("Enter a number grade 0-100" +
"Or enter 999 to end entries", 999);
        while (entry != 999);  
        entry = entry  
        entry = parseInt(entry);
}
    if (entry >= 0 && entry <= 100)
alert("Entry must by a valid number from 0 through 100\n" +
"Or enter 999 to end entries");
    if (entry!=999 && entry >= 88)
alert("Number Grade = " + entry + "Letter Grade = A");
    else if (entry!=999 && entry <= 80 && numberGrade < 88)
alert("Number Grade = " + entry + "Letter Grade = B");
    else if (entry!=999 && entry <= 68 && numberGrade < 79)
alert("Number Grade = " + entry + "Letter Grade = C");
    else if (entry!=999 && entry < 60)
alert("Number Grade = " + entry + "Letter Grade = F");
}
}
