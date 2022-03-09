import { useStore, mapState } from "vuex";
import { computed } from "vue";

const useState = function(mapper) {
    // mapper： Array | Object
    const store = useStore();

    //使用辅助函数解析成一个对象
    const storeStateFns = mapState(mapper);
    const storeState = {};

    //通过Object.keys拿到对象的所有key值，遍历，取出对应的value值，也就是函数
    Object.keys(storeStateFns).forEach((item) => {
        // 这我们知道辅助函数的内部是通过this.$store来实现的
        // setup中没有this， 所以通过bind来改变this的指向
        const fn = storeStateFns[item].bind({ $store: store });
        //拿到函数，作为计算属性的参数，最后在留在一个对象中
        storeState[item] = computed(fn);
    });

    // storeState是一个对象， key是字符串， value值是ref对象
    return storeState;
};

export default useState;