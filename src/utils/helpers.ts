export function getBranches(branchesList?: string[], branchName: string) {
  const branches = branchesList ?
  branchesList.map((branch, index) => {
    if (branchName && branch === branchName) {
      return <Dropdown.Item eventKey={index} active>{branch}</Dropdown.Item>;
    }
    return <Dropdown.Item eventKey={index} active>{branch}</Dropdown.Item>;
  }) : [];
}

export function getBanks(banksList?: string[], bankName: string) {
  const banks = banksList ?
  banksList.map((b, index) => {
      if (bankName && b === bankName) {
        return <Dropdown.Item key={b} eventKey={index} active>{b}</Dropdown.Item>;
      }
      return <Dropdown.Item key={b} eventKey={index} active>{b}</Dropdown.Item>;
    }) : [];
}