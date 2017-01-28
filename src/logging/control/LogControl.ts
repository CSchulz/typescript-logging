import {CategoryControl, CategoryControlImpl} from "./CategoryControl";
import {LogGroupControl, LogGroupControlImpl} from "./LogGroupControl";

/**
 * LogControl interface
 */
export interface LogControl {

  /**
   * Prints the help.
   */
  help(): void;

  /**
   * Shows an example on usage.
   */
  example(): void;

  /**
   * Return LogGroupControl object.
   */
  getLogGroupControl(): LogGroupControl;

  /**
   * Return CategoryControl object.
   */
  getCategoryControl(): CategoryControl;

}

export class LogControlImpl implements LogControl {

  /* tslint:disable:no-trailing-whitespace */
  private static _help: string =
`
  help()
    ** Shows this help.
    
  example()
    ** Shows code example with short explanation on using this.

  getLogGroupControl(): LogGroupControl
    ** Returns LogGroupControl object.
    ** Can be used to control LogGroups

  getCategoryControl(): CategoryControl
    ** Returns CategoryControl object.
`;

  private static _example: string =
`
  // Line already done, or you would not see this help.
  const lc = TSL.getLogControl();
  lc.help(); // Prints help
  const lgc = lc.getLogGroupControl();
  lgc.
`;
  /* tslint:enable:no-trailing-whitespace */

  public help(): void {
    /* tslint:disable:no-console */
    console.log(LogControlImpl._help);
    /* tslint:enable:no-console */
  }

  public example(): void {
    /* tslint:disable:no-console */
    console.log(LogControlImpl._example);
    /* tslint:enable:no-console */
  }

  public getLogGroupControl(): LogGroupControl {
    return new LogGroupControlImpl();
  }

  public getCategoryControl(): CategoryControl {
    return new CategoryControlImpl();
  }
}
