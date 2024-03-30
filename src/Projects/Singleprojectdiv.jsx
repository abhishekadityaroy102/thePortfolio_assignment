import React, { useState } from "react";
import styles from "./Singleprojectdiv.module.css";
import { RxCross2 } from "react-icons/rx";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Divider, Modal, Stack, Typography } from "@mui/material";
const Singleprojectdiv = ({ data }) => {
 
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    width:"100%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className={styles.maindiv} >
      <img src={data?.image.url} onClick={handleOpen} />
      <Modal
        open={open}
       onClick={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}> */}
      
        <Card sx={{ ...style }}>
        
      <CardMedia
        sx={{ height: 140 }}
        image={data?.image.url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {data?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {
            data?.description
          }
        </Typography>
       
       <Box marginTop={2}>
       <Stack direction="row" spacing={1}>
        {
          data?.techStack.length>0&&data.techStack.map((el)=><Chip label={el} />)
        }</Stack>
       </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Live</Button>
        <Button size="small">Code</Button>
      </CardActions>
    </Card>
        {/* </Box> */}
      </Modal>
    </div>
  );
};

export default Singleprojectdiv;
