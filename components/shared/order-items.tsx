import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CartItem } from "@/types";
import Image from "next/image";
import Link from "next/link";

const OrderItems = ({ items }: { items: CartItem[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Item</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.slug}>
            <TableCell>
              <Link
                href={`/product/${item.slug}`}
                className="flex items-center"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                />
                <span className="px-2">{item.name}</span>
              </Link>
            </TableCell>
            <TableCell>
              <span className="px-2">{item.qty}</span>
            </TableCell>
            <TableCell className="text-right">${item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderItems;
