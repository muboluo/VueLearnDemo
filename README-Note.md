# VueLearnDemo


### 开发过程中遇到的bug：

    
    
#### 1. vue 导入其他文件中的方法


遇到的bug提示：vue typeError 0 , .default is not a function

---


   > 导出 default 定义的 function 时，不需要加 {}
   
    export default function test001(){
    
    }
    
   > 导出 非default 方法时，需要加 {}
    
    export function test002(){
    
    }
    
   > 导入时
   
    import test001 from 'xxx'
    
    import {test002} from 'xxx'
    
   > tips
        
    一个文件、模块中只有一个方法能添加 default 修饰符，
    
    
#### 2. @表示根路径

@表示工程的根路径。若需要访问子路径中的内容，需要在@后添加/。
不是直接添加子路径名。

遇到的bug 提示： module not found:error:can't resolve xxx

    eg: @/xxx
    
    
#### 3. 安装 vue cli工具，

若在命令行执行完安装命令后，vue 命令一直报错 command not fount vue.

是node/bin 没有导出。 查找到 该位置，export 即可。

    export PATH="$PATH:/usr/local/Cellar/node/8.9.1/bin"

     
            
        
                    
        
            
        
        
        
        
        
         
    