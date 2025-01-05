import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/lib/utils";
// import PlaceOrderForm from "./place-order-form";

const OrderSummary = ({
  itemsPrice,
  taxPrice,
  shippingPrice,
  totalPrice,
  children = null,
}: {
  itemsPrice: string;
  taxPrice: string;
  shippingPrice: string;
  totalPrice: string;
  children?: React.ReactNode;
}) => {
  return (
    <div>
      <Card>
        <CardContent className="p-4 gap-4 space-y-4">
          <div className="flex justify-between">
            <div>Items</div>
            <div>{formatCurrency(itemsPrice)}</div>
          </div>
          <div className="flex justify-between">
            <div>Tax</div>
            <div>{formatCurrency(taxPrice)}</div>
          </div>
          <div className="flex justify-between">
            <div>Shipping</div>
            <div>{formatCurrency(shippingPrice)}</div>
          </div>
          <div className="flex justify-between">
            <div>Total</div>
            <div>{formatCurrency(totalPrice)}</div>
          </div>
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderSummary;
