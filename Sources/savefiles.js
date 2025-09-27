function saveGameFile() {
      function saveToFile(content, fileName, contentType) {
            const blob = new Blob([content], { type: contentType });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
      }

      const data =`properfilesave = true; 
            money = ` + money + `; currentDay = ` + currentDay + `; rent = ` + rent + `; food = ` + food + `; heat = ` + heat + `; amtEntered = ` + amtEntered + `; amtArrested = ` + amtArrested + `; amtDenied = ` + amtDenied + `; amtWykrocz = ` + amtWykrocz + `; reqDoc = ` + '`' + reqDoc + '`' + `; newChapters = ` + '`' + newChapters + '`' + `; entryRules = ` + '`' + entryRules + '`' + `; `;
            // Expand at the end in case of new data that must be saved. Remember to put this for data that must be in brackets:     + '`' + 

      let date = new Date();
      const customFileName = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + ".dp";
      saveToFile(data, customFileName, 'text/plain');
}


function toggleSaveCheck() {
      let bh = document.getElementById("savecheck1");
      let kj = document.getElementById("gosaveb");
      if (bh.checked) {
            bh.checked = false;
            kj.innerHTML = '<span style="color: red;">☒</span> Zapisać postęp?';
      } else {
            bh.checked = true;
            kj.innerHTML = '<span style="color: green;">☑</span> Zapisać postęp?';
      }
}