import React from "react"
import { Paper, Tabs } from "material-ui"
import { Tab } from "material-ui/Tabs"

export default ({ muscles, category, onSelect }) => {
  const index = muscles.findIndex(muscle => muscle === category) + 1
  const onTabChange = (e, value) => onSelect(muscles[value - 1])
  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onTabChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(muscle => (
          <Tab label={muscle} />
        ))}
      </Tabs>
    </Paper>
  )
}
