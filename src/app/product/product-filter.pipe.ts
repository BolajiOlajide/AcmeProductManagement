// import the Pipe and PipeTransform modules to enable us created custom pipes.
import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from "./product";

// create a custom Pipe to enable filtering of objects.
@Pipe({
    name: 'productFilter'
})
// export the pipe so any component can make use of it.
export class productFilterPipe implements PipeTransform {

    //we supplied the parameter, filterBy to the transform function.
    
    transform( value: IProduct[], filterBy: string): IProduct[] {

        // if no value is entered let filterBy be null else change the value entered to lower case
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;

        // if filterBy is null, return the value which is null or else filter the products using the value
        // inputed by the user (which is in lowercase now) to compare agains the product's name in lower case
        // also.
        return filterBy ? value.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1): value;

    }

}