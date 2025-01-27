"use client";

import { useToast } from "@/hooks/use-toast";
import { productsDefaultValues } from "@/lib/constants";
import { insertProductSchema, updateProductSchema } from "@/lib/validators";
import { Product } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ControllerRenderProps, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import slugify from "slugify";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const ProductForm = ({
  type,
  product,
  productId,
}: {
  type: "Create" | "Update";
  product?: Product;
  productId?: string;
}) => {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof insertProductSchema>>({
    resolver:
      type === "Update"
        ? zodResolver(updateProductSchema)
        : zodResolver(insertProductSchema),
    defaultValues:
      product && type === "Update" ? product : productsDefaultValues,
  });

  const generateSlug = () => {
    form.setValue("slug", slugify(form.getValues("name"), { lower: true }));
  };

  type TNameField = {
    field: ControllerRenderProps<z.infer<typeof insertProductSchema>, "name">;
  };
  type TSlugField = {
    field: ControllerRenderProps<z.infer<typeof insertProductSchema>, "slug">;
  };
  type TCategoryField = {
    field: ControllerRenderProps<
      z.infer<typeof insertProductSchema>,
      "category"
    >;
  };
  type TBrandField = {
    field: ControllerRenderProps<z.infer<typeof insertProductSchema>, "brand">;
  };
  type TPriceField = {
    field: ControllerRenderProps<z.infer<typeof insertProductSchema>, "price">;
  };
  type TStockField = {
    field: ControllerRenderProps<z.infer<typeof insertProductSchema>, "stock">;
  };
  type TDescriptionField = {
    field: ControllerRenderProps<
      z.infer<typeof insertProductSchema>,
      "description"
    >;
  };

  return (
    <Form {...form}>
      <form className="space-y-8">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }: TNameField) => (
              <FormItem className="w-full">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter product name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Slug */}
          <FormField
            control={form.control}
            name="slug"
            render={({ field }: TSlugField) => (
              <FormItem className="w-full">
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input placeholder="Enter slug" {...field} />
                    <Button
                      type="button"
                      className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1 mt-2"
                      onClick={generateSlug}
                    >
                      Generate
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row  gap-5">
          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }: TCategoryField) => (
              <FormItem className="w-full">
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="Enter category" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Brand */}
          <FormField
            control={form.control}
            name="brand"
            render={({ field }: TBrandField) => (
              <FormItem className="w-full">
                <FormLabel>Brand</FormLabel>
                <FormControl>
                  <Input placeholder="Enter brand" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row  gap-5">
          {/* Price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }: TPriceField) => (
              <FormItem className="w-full">
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="Enter product price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Stock */}
          <FormField
            control={form.control}
            name="stock"
            render={({ field }: TStockField) => (
              <FormItem className="w-full">
                <FormLabel>Stock</FormLabel>
                <FormControl>
                  <Input placeholder="Enter stock" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="upload-field flex flex-col gap-5">{/* Images */}</div>
        <div className="upload-field">{/* isFeatured */}</div>
        <div>
          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }: TDescriptionField) => (
              <FormItem className="w-full">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    className="resize-none"
                    placeholder="Enter product description"
                    {...field}
                  ></Textarea>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div>
          {/* Submit */}

          <Button
            type="submit"
            size="lg"
            disabled={form.formState.isSubmitting}
            className="button col-span-2 w-full"
          >
            {form.formState.isSubmitting ? "Submitting" : `${type} product`}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProductForm;
