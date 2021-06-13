import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FaArrowRight } from "react-icons/fa";

const Styles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function FeatureCard({ data }) {
  const classes = Styles();
  const id = data.id;

  let history = useHistory();
  const handleDetails = () => {
    history.push(`/product/${id}`);
    console.log(history);
  };

  return (
    <Card className={classes.root} onClick={handleDetails}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://products-imgs.s3.us-east-2.amazonaws.com/${data.doc_key}`}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.desc}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions display="flex">
        <Button size="medium" color="primary">
          <FaArrowRight />
        </Button>
      </CardActions>
    </Card>
  );
}

