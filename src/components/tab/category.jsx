import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CreateCategoryForm from "../../pages/categories/createCategory";
import CreateSubCategoryForm from "../../pages/categories/createSubCategory";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CategoryTab(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log({ props });

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {props.item
            ? props.item?.map((item, key) => {
                return (
                    <Tab label={item.title} {...a11yProps(key)} />
                );
              })
            : ""}
        </Tabs>
      </Box>

      {props.item
        ? props.item?.map((item, key) => {
            return (
              <>
                <TabPanel value={value} index={key}>
                    {item.title === 'Categories' ? <CreateCategoryForm/> : "" }
                    {item.title === 'SubCategories' ? <CreateSubCategoryForm/> : "" }
                </TabPanel>
                {/* <TabPanel value={value} index={key}>
                    
                </TabPanel> */}
              </>
            );
          })
        : ""}
    </Box>
  );
}
