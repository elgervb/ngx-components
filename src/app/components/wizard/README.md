# Wizard module

## Example

```
<evb-wizard>
    <evb-wizard-header></evb-wizard-header>

    <evb-wizard-step name="step1">
      <p>evb-wizard-step-1</p>
    </evb-wizard-step>

    <evb-wizard-step name="step2">
      <h2>evb-wizard-step-2</h2>
      <p>It's required to fill in the name field to proceed to the next step.</p>
      <form>
        <div class="form-group">
          <label for="name">Name (*)</label>
          <input type="text" class="form-control" id="name" name="name" ngModel required>
        </div>
      </form>
    </evb-wizard-step>

    <evb-wizard-step name="step3" [canExit]="proceed">
      <p>evb-wizard-step-3</p>
      <p> <i>{{proceed}}</i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget magna massa. Vivamus vehicula orci interdum ipsum aliquam, ut elementum lorem porttitor. Nulla eget orci justo. In egestas consectetur odio, quis fermentum ipsum condimentum vitae. Sed at tincidunt est. Vestibulum at enim eu eros vulputate consectetur. Phasellus facilisis massa id euismod mattis.</p>

      <label>Check to proceed <input type="checkbox" (change)="toggleProceed()"></label>
    </evb-wizard-step>

    <evb-wizard-step name="step4">
      <p>evb-wizard-step-4</p>
      <ul>
        <li> content list 1</li>
        <li> content list 2</li>
        <li> content list 3</li>
        <li> content list 4</li>
      </ul>
    </evb-wizard-step>

    <evb-wizard-footer [btnPreviousText]="'Vorige'" [btnNextText]="'Volgende'" [btnCompleteText]="'Voltooien'"></evb-wizard-footer>
  </evb-wizard>
```
