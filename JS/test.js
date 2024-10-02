function seveTimeUser(readout) {
  const date = new Date();
  return localStorage.setItem(date.toLocaleDateString(), readout);
}

seveTimeUser("12:23:47");
