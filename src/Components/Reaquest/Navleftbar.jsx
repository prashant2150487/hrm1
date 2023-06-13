import * as React from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import PersonIcon from "@mui/icons-material/Person";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";

import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
export default function NestedList() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "#1a237e", color: "#ffff", p: 3 }}
            component="nav"
            dense
            aria-labelledby="nested-list-subheader"
            disablePadding

        >
            <ListItemButton onClick={handleClick} sx={{ bgcolor: '#ccc' }}>
                <PersonIcon sx={{ color: "#ffff", left: 0, mr: 1 }} />
                <ListItemText primary="Requests" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List dense component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4, border: '2px solid #fff', mx: 4 }}>
                        <ListItemIcon>
                            <ArrowForwardIcon sx={{ color: "#ffff" }} />
                        </ListItemIcon>
                        <ListItemText primary="back" />
                    </ListItemButton>
                </List>
                <List dense component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <ForwardToInboxIcon sx={{ color: "#ffff" }} />
                        </ListItemIcon>
                        <ListItemText primary="back" />
                    </ListItemButton>
                </List>
                <List dense component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <ForwardToInboxIcon sx={{ color: "#ffff" }} />
                        </ListItemIcon>
                        <ListItemText primary="Attendance reg..." />
                    </ListItemButton>
                </List>
                <List dense component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <ForwardToInboxIcon sx={{ color: "#ffff" }} />
                        </ListItemIcon>
                        <ListItemText primary="Expense" />
                    </ListItemButton>
                </List>
                <List dense component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <ForwardToInboxIcon sx={{ color: "#ffff" }} />
                        </ListItemIcon>
                        <ListItemText primary="Helpdesk ticket" />
                    </ListItemButton>
                </List>
                <List dense component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <ForwardToInboxIcon sx={{ color: "#ffff" }} />
                        </ListItemIcon>
                        <ListItemText primary="Leave" />
                    </ListItemButton>
                </List>
                <List dense component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <ForwardToInboxIcon sx={{ color: "#ffff" }} />
                        </ListItemIcon>
                        <ListItemText primary="Resignation" />
                    </ListItemButton>
                </List>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <WifiCalling3Icon sx={{ color: "#ffff" }} />
                    </ListItemIcon>
                    <ListItemText primary="Requests" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

            </Collapse>
        </List>
    );
}
