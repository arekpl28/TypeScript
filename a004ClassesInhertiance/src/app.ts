class Department {
  protected employees: string[] = []

  constructor(private readonly id: string, public name: string) {
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins
  }
}
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addEmployee(name: string): void {
    if (name === 'Max') {
      return
    }
    this.employees.push(name)
  }

  addReport(text: string) {
    this.reports.push(text)
  }
  printReports() {
    console.log(this.reports)
  }
}

const it = new ITDepartment("Id", ["Max"])

it.addEmployee("Max")
it.addEmployee("Arek")

it.describe()
it.printEmployeeInformation()
console.log(it)

const accounting = new AccountingDepartment("Id", [])
accounting.addReport("Something went wrong")
console.log(accounting)

accounting.addEmployee("Max")
accounting.addEmployee("Coś")
accounting.printEmployeeInformation()
// const accountingCopy = { name: "Jan", describe: accounting.describe }

// accountingCopy.describe()