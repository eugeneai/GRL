function urlForGetIds(typeFault) {
  return `http://localhost:7200/repositories/ActiveFaults?query=PREFIX%20rdf%3A%20%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%20PREFIX%20%3A%20%3Chttp%3A%2F%2F192.168.2.2%3A7200%2Frepositories%2FActiveFaults%23%3E%20SELECT%20%3Fid%20WHERE%20%7B%20%3Fs%20rdf%3Atype%20%3A${typeFault}.%20%3Fs%20%3AID%20%3Fid.%20%7D`
}

const urls = {
  
  // Исторические типы
  PlioceneFaultsID: urlForGetIds("PlioceneFault"),
  HoloceneFaultsID: urlForGetIds("HoloceneFault"),
  HistoricalFaultsID: urlForGetIds("HistoricalFault"),
  PleistoceneFaultsID: urlForGetIds("PleistoceneFault"),
  
  // Кинематические типы
  UpLiftCB: urlForGetIds("UpLiftCB"),           //  Взбросы
  LeftUSCB: urlForGetIds("LeftUSCB"),           //  Левые взбросо-сдвиги
  LeftNSCB: urlForGetIds("LeftNSCB"),           //  Левые сбросо-сдвиги
  LeftSCB: urlForGetIds("LeftSCB"),             //  Левые сдвиги
  RightUSCB: urlForGetIds("RightUSCB"),         //  Правые взбросо-сдвиги
  RightNSCB: urlForGetIds("RightNSCB"),         //  Правые сбросо-сдвиги
  RightSCB: urlForGetIds("RightSCB"),           //  Правые сдвиги
  NormalSlCB: urlForGetIds("NormalSlCB"),       //  Сбросы
  ShiftUpCB: urlForGetIds("ShiftUpCB"),         //  Сдвиго-взбросы
  ShiftNormalCB: urlForGetIds("ShiftNormalCB"), //  Сдвиго-сбросы

  // Сейсмоактивные разломы
  SeismicallyActiveFault: urlForGetIds("SeismicallyActiveFault"),
}

export default urls