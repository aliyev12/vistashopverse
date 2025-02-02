import { DollarSign, Headset, ShoppingBag, WalletCards } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const IconBoxes = () => {
  return (
    <div>
      <Card>
        <CardContent className="grid md:grid-cols-4 gap-4 p-4">
          <div className="space-y-2">
            <ShoppingBag />
            <div className="text-small font-bold">Free Shipping</div>
            <div className="text-sm text-muted-foreground">
              Free shipping on orders above $100
            </div>
          </div>

          <div className="space-y-2">
            <DollarSign />
            <div className="text-small font-bold">Money Back Guarantee</div>
            <div className="text-sm text-muted-foreground">
              Within 30 days of purchase
            </div>
          </div>
          <div className="space-y-2">
            <WalletCards />
            <div className="text-small font-bold">Flexible Payment</div>
            <div className="text-sm text-muted-foreground">
              Pay with a credit card or PayPal
            </div>
          </div>
          <div className="space-y-2">
            <Headset />
            <div className="text-small font-bold">24/7 Support</div>
            <div className="text-sm text-muted-foreground">
              Get support at any time
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IconBoxes;
