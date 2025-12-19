import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Collapse,
  Stack,
} from "@mui/material";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import LunchDiningRoundedIcon from "@mui/icons-material/LunchDiningRounded";

const MessCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ maxWidth: 360, mx: "auto", p: 1 }}>
      {/* Main Mess Card */}
      <Card
        onClick={() => setOpen(!open)}
        sx={{
          borderRadius: 3,
          cursor: "pointer",
          boxShadow: 3,
          transition: "0.3s",
          "&:hover": { boxShadow: 6 },
        }}
      >
        <CardContent>
          <Stack direction="row" spacing={2} alignItems="center">
            <RestaurantRoundedIcon color="primary" fontSize="large" />
            <Box>
              <Typography variant="h6">Vedas Mess Card</Typography>
              <Typography variant="body2" color="text.secondary">
                Click to view monthly plans
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </Card>

      {/* Expandable Content */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Stack spacing={2} mt={2}>
          {/* Full Meals */}
          <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <LunchDiningRoundedIcon color="success" />
                <Box flex={1}>
                  <Typography variant="subtitle1">Break Fast</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Veg breakfast, Morning & Night
                  </Typography>
                </Box>
                <Typography fontWeight={600}>₹1700 / month</Typography>
              </Stack>
              <Button fullWidth sx={{ mt: 1 }} variant="outlined">
                Select Plan
              </Button>
            </CardContent>
          </Card>

          {/* Chicken Meals */}
          <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center">
                <LunchDiningRoundedIcon color="error" />
                <Box flex={1}>
                  <Typography variant="subtitle1">Lunch & Dinner</Typography>
                  <Typography variant="body2" color="text.secondary">
                    veg meals
                  </Typography>
                </Box>
                <Typography fontWeight={600}>₹2400 / month</Typography>
              </Stack>
              <Button fullWidth sx={{ mt: 1 }} variant="contained">
                Select Plan
              </Button>
            </CardContent>
          </Card>
        </Stack>
      </Collapse>
    </Box>
  );
}

export default MessCard;
