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
      <div className="add-area">
        {quantity === 0 ? (
          <Button variant="contained"> + Zum Warenkorb hinzufügen</Button>
        ) : (
          <div className="add-area">
            <div className="add-area">
              <Button variant="contained">-</Button>
              <span>{quantity} im Warenkorb</span>
              <Button variant="contained">+</Button>
            </div>
            <div className="add-area">
              <Button variant="contained">Entfernen</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
