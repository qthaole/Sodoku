import { Component } from '@angular/core';
import * as $ from 'jquery';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
onClickSolve() {
  this.data = [[[8, 0, 0, 0,0, 0, 0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],  
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0]
]];
}

onClickSave(){
  $.post("demo_test_post.asp",
  {
    data: this.data
  },
  (data, status) => {
    alert("Data: " + data + "\nStatus: " + status);
  });
}
  title = 'myApp';
  post_url = "https:localhost:4200/save";
  data = [[[6, 9, 0, 0,0, 0, 7, 0, 0],
  [0, 0, 0, 0,9, 6,0, 0, 0],
  [0, 8, 0, 7,5, 3,0, 9, 0],
  [0, 2, 0, 3,7, 4,5, 6, 1],
  [3, 6, 0, 0,0, 5,0, 2, 0],  
  [0, 0, 0, 9,6, 0,3, 7, 8],
  [0, 0, 6, 0,3, 1,0, 8, 4],
  [0, 4, 5, 8,0, 7,6, 0, 0],
  [0, 0, 0, 0,0, 0,0, 5, 7]]


  ];

onClick = (): void => {
  this.data = [[[0, 0, 0, 0,0, 0, 0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],  
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0]
]]

  for(var i = 0; i < 9; i++) {
    for(var j = 0; j< 9; j++)
    {
        let newDigit = Math.floor(Math.random() * 10);
        if (newDigit == 0) {
            this.data[0][i][j] = 0;
            continue;
        }

        

        for(var t = 0; t < j; t++){
          if (this.data[0][i][t] == newDigit)
          {
              this.data[0][i][j] = 0;
              continue;
          }
      }

        //Check vertically
        for(var t = 0; t < i; t++){
            if (this.data[0][t][j] == newDigit)
            {
                this.data[0][i][j] = 0;
                continue;
            }
        }

        this.data[0][i][j] = newDigit;

      }

    }
  }
};


