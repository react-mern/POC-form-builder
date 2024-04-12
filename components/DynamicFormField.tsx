"use client";

// Library import
import React from "react";
import { Control, FieldValues, UseFormReturn } from "react-hook-form";

// UI import
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

// constant type import
import { InputField } from "@/constant";

interface DynamicFormFieldProps {
  control: Control<FieldValues, any>;
  inField: InputField;
  form: UseFormReturn<FieldValues, any, undefined>;
}

export default function DynamicFormField({
  form,
  control,
  inField,
}: // fields,
DynamicFormFieldProps) {
  // required switch method to display different input method and option

  const { register } = form;

  switch (inField.type) {
    case "text":
      return (
        <FormField
          control={control}
          name={inField.inputName}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {inField.inputLabel}
                {inField.required && <sup className="text-red-500">*</sup>}
              </FormLabel>
              <FormControl>
                <Input
                  // {...field}
                  {...register(`${inField.inputName}`, {
                    required: inField.required,
                  })}
                  placeholder={inField.placeholder}
                  type={inField.type}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case "email":
      return (
        <FormField
          control={control}
          name={inField.inputName}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {inField.inputLabel}
                {inField.required && <sup className="text-red-500">*</sup>}
              </FormLabel>
              <FormControl>
                <Input
                  // {...field}
                  {...register(`${inField.inputName}`, {
                    required: inField.required,
                  })}
                  placeholder={inField.placeholder}
                  type={inField.type}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case "password":
      return (
        <FormField
          control={control}
          name={inField.inputName}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {inField.inputLabel}
                {inField.required && <sup className="text-red-500">*</sup>}
              </FormLabel>
              <FormControl>
                <Input
                  // {...field}
                  {...register(`${inField.inputName}`, {
                    required: inField.required,
                  })}
                  placeholder={inField.placeholder}
                  type={inField.type}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case "button":
      return <Button type="submit">{inField.inputLabel}</Button>;

    case "switch":
      return (
        <FormField
          control={control}
          name={inField.inputName}
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">
                  {inField.inputLabel}
                  {inField.required && <sup className="text-red-500">*</sup>}
                </FormLabel>
                <FormDescription></FormDescription>
              </div>
              <FormControl>
                <Switch
                  {...register(`${inField.inputName}`, {
                    required: inField.required,
                  })}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
      );
    case "select":
      return (
        <FormField
          control={control}
          name={inField.inputName}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {inField.inputLabel}
                {inField.required && <sup className="text-red-500">*</sup>}
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                {...register(`${inField.inputName}`, {
                  required: inField.required,
                })}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={inField.placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {!(typeof inField.options == "string") &&
                    inField.options?.map((option) => {
                      return (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      );
                    })}
                </SelectContent>
              </Select>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case "checkbox":
      return (
        <FormField
          control={control}
          name={inField.inputName}
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  {...register(`${inField.inputName}`, {
                    required: inField.required,
                  })}
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  {inField.inputLabel}
                  {inField.required && <sup className="text-red-500">*</sup>}
                </FormLabel>
                <FormDescription></FormDescription>
              </div>
            </FormItem>
          )}
        />
      );
    case "textArea":
      return (
        <FormField
          control={control}
          name={inField.inputName}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {inField.inputLabel}
                {inField.required && <sup className="text-red-500">*</sup>}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder={inField.placeholder}
                  className="resize-none"
                  // {...field}
                  {...register(`${inField.inputName}`, {
                    required: inField.required,
                  })}
                />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      );
    case "radio":
      return (
        <FormField
          control={control}
          name={inField.inputName}
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>
                {inField.inputLabel}
                {inField.required && <sup className="text-red-500">*</sup>}
              </FormLabel>
              <FormControl>
                <RadioGroup
                  {...register(`${inField.inputName}`, {
                    required: inField.required,
                  })}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {!(typeof inField.options == "string") &&
                    inField.options?.map((option) => {
                      return (
                        <FormItem
                          className="flex items-center space-x-3 space-y-0"
                          key={option}
                        >
                          <FormControl>
                            <RadioGroupItem value={option} />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {option}
                          </FormLabel>
                        </FormItem>
                      );
                    })}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      );

    // for sub fields
    // case "fields":
    //   return (
    //     <>
    //       {fields?.label && <FormLabel>{fields?.label}</FormLabel>}
    //       <div className="ps-6  pt-4">
    //         {fields?.fields?.map((subField) => {
    //           return (
    //             <FormField
    //               control={control}
    //               name={subField.text!}
    //               render={({ field }) => (
    //                 <FormItem>
    //                   <FormLabel>{subField.label}</FormLabel>
    //                   <FormControl>
    //                     <Input
    //                       {...field}
    //                       placeholder={placeholder}
    //                       type={subField.type}
    //                       className="w-full"
    //                     />
    //                   </FormControl>
    //                   <FormMessage />
    //                 </FormItem>
    //               )}
    //             />
    //           );
    //         })}
    //       </div>
    //     </>
    //   );
  }
}
