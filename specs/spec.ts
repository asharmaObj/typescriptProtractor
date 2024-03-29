// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor/globals'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor';
//
// The jasmine typings are brought in via DefinitelyTyped ambient typings.
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

describe('protractor with typescript typings', () => {
  beforeEach(async () => {
    await browser.get('http://www.angularjs.org');
  });
for(var i =0; i<5; i++){
  it('should greet the named user', async (done) => {
    await element(by.model('yourName')).sendKeys('Julie');
    const greeting = element(by.binding('yourName'));
    expect(await greeting.getText()).toEqual('Hello Julie!');
    done();
  });
}
  it('should list todos', async (done) => {
    const todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(await todoList.count()).toEqual(2);
    expect(await todoList.get(1).getText()).toEqual('build an AngularJS app');
    done();
  });
});
