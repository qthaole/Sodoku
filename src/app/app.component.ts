import { Component } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
onClickSolve() {
  this.data = [[8, 0, 0, 0,0, 0, 0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],  
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
]
}
  title = 'myApp';
  data = [[0, 0, 0, 0,0, 0, 0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],  
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
]

checkVertical(value: number)
{

}

onClick = (): void => {
  this.data = [[0, 0, 0, 0,0, 0, 0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],  
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
  [0, 0, 0, 0,0, 0,0, 0, 0],
]

  for(var i = 0; i < 9; i++) {
    for(var j = 0; j< 9; j++)
    {
        let newDigit = Math.floor(Math.random() * 10);
        if (newDigit == 0) {
            this.data[i][j] = 0;
            continue;
        }

        

        for(var t = 0; t < j; t++){
          if (this.data[i][t] == newDigit)
          {
              this.data[i][j] = 0;
              continue;
          }
      }

        //Check vertically
        for(var t = 0; t < i; t++){
            if (this.data[t][j] == newDigit)
            {
                this.data[i][j] = 0;
                continue;
            }
        }

        this.data[i][j] = newDigit;

      }

    }
  }
};
}

