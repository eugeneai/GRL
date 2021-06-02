// export const seismicOptions = [
//   { value: {type: "LOAD_DATA_BY_SEISMIC", option: "All"}, label: "Все" },
//   { value: {type: "LOAD_DATA_BY_SEISMIC", option: "SeismicallyActiveFault"}, label: "Сейсмоактивные" },
// ]
// export const kinematicLevelOptions = [
//   { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "All"}, label: "Все" },
//   { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "NormalSlCB"}, label: "Сбросы" },
//   { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "ShiftNormalCB"}, label: "Сдвиго-сбросы" },
//   { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "UpLiftCB"}, label: "Взбросы" },
//   { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "ShiftUpCB"}, label: "Сдвиго-взбросы" },
//   { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "LeftSCB"}, label: "Левые сдвиги" },
//   { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "LeftNSCB"}, label: "Левые сбросо-сдвиги" },
//   { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "RightNSCB"}, label: "Правые сбросо-сдвиги" },
//   { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "RightUSCB"}, label: "Правые взбросо-сдвиги" },
//   { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "RightSCB"}, label: "Правые сдвиги" },
//   { value: {type: "LOAD_DATA_BY_KINEMATIC_TYPE", option: "LeftUSCB"}, label: "Левые взбросо-сдвиги" },
// ]
// export const historicalAgeOptions = [
//   { value: {type: "LOAD_DATA_BY_HISTORIC_AGE", option: "All"}, label: "Все" },
//   { value: {type: "LOAD_DATA_BY_HISTORIC_AGE", option: "HistoricalFaultsID"}, label: "Исторический" },
//   { value: {type: "LOAD_DATA_BY_HISTORIC_AGE", option: "HoloceneFaultsID"}, label: "Голоценовый" },
//   { value: {type: "LOAD_DATA_BY_HISTORIC_AGE", option: "PleistoceneFaultsID"}, label: "Плейстоценовый" },
//   { value: {type: "LOAD_DATA_BY_HISTORIC_AGE", option: "PlioceneFaultsID"}, label: "Плиоценовый" },
// ]

export const seismicOptions = [
  { value: "All", label: "Все" },
  { value: "SeismicallyActiveFault", label: "Сейсмоактивные" },
]
export const kinematicLevelOptions = [
  { value:  "All", label: "Все" },
  { value:  "NormalSlCB", label: "Сбросы" },
  { value:  "ShiftNormalCB", label: "Сдвиго-сбросы" },
  { value:  "UpLiftCB", label: "Взбросы" },
  { value:  "ShiftUpCB", label: "Сдвиго-взбросы" },
  { value:  "LeftSCB", label: "Левые сдвиги" },
  { value:  "LeftNSCB", label: "Левые сбросо-сдвиги" },
  { value:  "RightNSCB", label: "Правые сбросо-сдвиги" },
  { value:  "RightUSCB", label: "Правые взбросо-сдвиги" },
  { value:  "RightSCB", label: "Правые сдвиги" },
  { value:  "LeftUSCB", label: "Левые взбросо-сдвиги" },
]
export const historicalAgeOptions = [
  { value: "All", label: "Все" },
  { value: "HistoricalFault", label: "Исторический" },
  { value: "HoloceneFault", label: "Голоценовый" },
  { value: "PleistoceneFault", label: "Плейстоценовый" },
  { value: "PlioceneFault", label: "Плиоценовый" },
]