"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CredentialsSignInForm = () => {
  return (
    <form>
      <div className="space-y-6">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
