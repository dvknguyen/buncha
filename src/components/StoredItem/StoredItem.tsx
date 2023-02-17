import { Button, Grid } from "@material-ui/core";
import "./StoredItem.css";

type StoreItemProps = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const quantity = 0;
export function StoredItem({ id, name, description, price }: StoreItemProps) {
  return (
    <div className="item-card">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          {name}
        </Grid>
        <Grid item xs={9}>
          {description}
        </Grid>
        <Grid item xs={3}>
          {price}
        </Grid>
      </Grid>
      <div>
        {quantity === 0 ? <Button> + Zum Warenbork hinzufügen</Button> : null}
      </div>
    </div>
  );
}
